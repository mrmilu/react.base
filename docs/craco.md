## CRACO

CRACO stands for: **Create React App Configuration Override**. This boilerplate is created with CRA to get all the
benefits from `react-scripts`. The issue with CRA configured projects it's that, although they offer many out of the box
settings, if you want to make some custom tweaks to your project it might be a little difficult. The only official
way is by **_ejecting_** CRA's config and handle everything manually. This way if something is broken in `react-scripts` and
gets patched you will lose the ability to accept this package patch, due to the nature of ejecting.

So to avoid this and also have the flexibility of configuring the project at will there are several packages that let you
extend the base configuration and also override it **without ejecting**. Some of them are: react-app-rewired, customize-cra,
Rescripts, react-scripts-rewired and **CRACO**. We have chosen this last one because is currently maintained and
supports CRA 5.

For mor info on CRACO visit [https://github.com/gsoft-inc/craco](https://github.com/gsoft-inc/craco)
