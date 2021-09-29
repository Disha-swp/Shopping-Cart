# for react bootstarp 
run npm install react-bootstrap@next bootstrap@5.1.0 in the terminal
and import import { Button } from 'react-bootstrap'; in *app.js*
also add import 'bootstrap/dist/css/bootstrap.min.css'; in *index.js*

# react query
npm i react-query
# for drawer
npm i @material-ui/core
# for redirection the user
npm i react-router-dom
# for icons
npm i @material-ui/icons
# for styled-components
npm install --save styled-components

 git remote add <name> <url>
  git push <name>
## react.FC<Props> in typescript
  fc is function controller <> generics these are ways to assign props 
  const cloth = ({ item, handleAddtoCart}:Props) =>(  could also be written like this where inside parenthesis for the props items are shown that they have a type of Props
  const cloth: React.FC<Props> = ({ item, handleAddtoCart}:Props) =>()  react.fc will work same as {}:Props
