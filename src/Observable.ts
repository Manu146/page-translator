import Observer from "./Observer";

export default interface Observable{
    attach(o : Observer) : void;
    detach(o : Observer) : void;
    notify() : void;
}