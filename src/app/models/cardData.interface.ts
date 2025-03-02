export interface cardInterface{
    id:number,
    image:string,
    category:string,
    description:string,
    price:number,
    title:string,
    rating:rate
}
type rate={
    count:number,
    rate:number
}