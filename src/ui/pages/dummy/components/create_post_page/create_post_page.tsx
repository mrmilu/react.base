import { useCallback, useState } from "react";
import { ClearButton, CreatePostPageStyled } from "@/src/ui/pages/dummy/components/create_post_page/create_post_page.styled";
import { Button } from "@/src/ui/components/button/button";
import { locator } from "@/src/core/app/ioc";
import type { IocProvider } from "@/src/core/app/ioc/interfaces";
import type { CreateDummyPostUseCase } from "@/src/core/dummy/domain/use_cases/create_dummy_post_use_case";
import { TYPES } from "@/src/core/app/ioc/types";
import { debounce } from "lodash";
import { Switch } from "@/src/ui/components/switch/switch";
import { useAsyncState } from "@front_web_mrmilu/hooks";

export default function CreatePostPage() {
  const [postNumber, setPostNumber] = useState(1);
  const [postTitles, setPostTitle] = useState<Array<string>>([]);
  const [debounceOn, setDebounceOn] = useState(true);
  const [asyncStateOn, setAsyncState] = useState(true);
  const { state: asyncState, setPromise } = useAsyncState();

  const createPost = async (isDebounce = false) => {
    const useCase = await locator.get<IocProvider<CreateDummyPostUseCase>>(TYPES.CreteDummyPostUseCase)();
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
    <CreatePostPageStyled>
      <div>
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
      <Button data-cy="create-post-btn" onClick={debounceOn ? () => debounceCreatePost(true) : () => createPost()}>
        Create
      </Button>
      <div>
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
      <Button onClick={() => createPost()} disabled={asyncState === "pending"}>
        Create
      </Button>
      {postTitles.map((title, idx) => {
        return <p key={idx}>{title}</p>;
      })}
      <ClearButton onClick={() => setPostTitle([])}>Clear list</ClearButton>
    </CreatePostPageStyled>
  );
}
