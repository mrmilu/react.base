import type { CreatePostUseCase } from "@/src/posts/application/use-cases/create-post-use-case";
import { locator } from "@/src/shared/ioc/__generated__";
import { TYPES } from "@/src/shared/ioc/__generated__/types";
import type { IocProvider } from "@/src/shared/ioc/interfaces";
import { Button } from "@/src/shared/presentation/components/button/button";
import { Switch } from "@/src/shared/presentation/components/switch/switch";
import { useAsyncState } from "@front_web_mrmilu/hooks";
import { debounce } from "lodash";
import { useCallback, useState } from "react";
import css from "./create-post-page.css";

export default function CreatePostPage() {
  const [postNumber, setPostNumber] = useState(1);
  const [postTitles, setPostTitle] = useState<Array<string>>([]);
  const [debounceOn, setDebounceOn] = useState(true);
  const [asyncStateOn, setAsyncState] = useState(true);
  const { state: asyncState, setPromise } = useAsyncState();

  const createPost = async (isDebounce = false) => {
    const useCase = await locator.get<IocProvider<CreatePostUseCase>>(TYPES.CreatePostUseCase)();
    // Super important to set the promise in which you are doing side effects to maintain the promise chain
    const promise = useCase
      .execute(postNumber)
      .then((post) => {
        if (post) setPostTitle((prevState) => [...prevState, post.title]);
      })
      .finally(() => {
        console.log("set post number");
        setPostNumber((prevState) => prevState + 1);
      });
    if (asyncStateOn && !isDebounce) setPromise(promise);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceCreatePost = useCallback(debounce(createPost, 400), [postNumber]);

  return (
    <div className={css.wrapper}>
      <div className={css.wrapperChild}>
        <h3>Create a random debounce post</h3>
        <Switch
          id="switch_off_debounce"
          label="Debounce active"
          defaultChecked={debounceOn}
          onChange={() => {
            setDebounceOn(!debounceOn);
          }}
        />
      </div>
      <Button onClick={debounceOn ? () => debounceCreatePost(true) : () => createPost()}>Create</Button>
      <div className={css.wrapperChild}>
        <h3>Create a random disable button state post</h3>
        <Switch
          id="switch_off_async_state"
          label="Button disable active"
          defaultChecked={asyncStateOn}
          onChange={() => {
            setAsyncState(!asyncStateOn);
          }}
        />
      </div>
      <Button data-cy="create-post-btn" onClick={() => createPost()} disabled={asyncState === "pending"}>
        Create
      </Button>
      {postTitles.map((title, idx) => {
        return <p key={idx}>{title}</p>;
      })}
      <Button variants={{ type: "danger" }} onClick={() => setPostTitle([])}>
        Clear list
      </Button>
    </div>
  );
}
