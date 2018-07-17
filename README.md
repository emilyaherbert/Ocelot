# Ocelot
An online IDE that integrates [Stopify](https://github.com/plasma-umass/Stopify), a compiler that enables users to stop long-running programs with arbitrarily deep recursion and infinite loops. It also integrates an academic sublanguage of JavaScript, _ElementaryJS_.

### Setting up
You'll need the following:
- [Node](https://nodejs.org/en/)
- [Yarn](https://www.yarnpkg.com)
- [Google Cloud SDK](https://cloud.google.com/sdk/)

Be sure you're authenticated on Google Cloud and on your computer:
```bash
gcloud auth login
gcloud auth application-default login
```

Then run this in root directory:
```bash
yarn install 
cd frontend/
yarn run start
cd ../backend/
yarn run build && yarn run serve
cd ..
```