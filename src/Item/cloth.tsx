import Button from "@material-ui/core/Button";
//types
import { CartItemType } from "../App";
//styles
import { Wrapper } from "./cloth.styles";
type Props = {
    item: CartItemType;
    handleAddtoCart:(clickeditem: CartItemType) => void;      //arrow function in typescript
};

const cloth: React.FC<Props> = ({ item, handleAddtoCart}) =>(  //fun componenet <> are called generics
    <Wrapper>
        <img src={item.image} alt={item.title}/>
        <div>
        <h3> {item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddtoCart(item)}>Add to cart </Button>
    </Wrapper>
);
export default cloth;