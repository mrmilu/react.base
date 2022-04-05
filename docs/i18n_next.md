## i18n-next

**Each time you add a new namespace** to the folder `assets/locales/{lang}` you should also add its corresponding
declarations to the file `react-i18next.d.ts`. This way typescript will be able to infer the translations keys
for each file.

**_Also remember_** (as stated in the package documentation) that for translations to work the following snippet
of code should be available on each page:

```tsx
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en"))
    }
  };
};
```

Here you could either use `getStaticProps` or `getServerSideProps` depending on the chosen strategy. For more
info read the package documentation.
