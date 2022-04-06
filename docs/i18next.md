## react-i18next

**Each time you add a new namespace** to the folder `src/ui/i18n/locales/{lang}` you should also add its corresponding
declarations to the file `react-i18next.d.ts`. This way typescript will be able to infer the translations keys
for each file.
