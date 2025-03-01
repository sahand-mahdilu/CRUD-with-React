
export default function ProductCart() {
  return (
    <div className="flex flex-col items-center gap-5 bg-slate-600 p-3 rounded-2xl">

        <h1 className="text-3xl font-bold">Shampoo</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, adipisci?</p>
        <div>
        <span className="text-2xl font-bold text-orange-500">Price: </span>
        <span className="text-2xl">800$ </span>


        </div>
        <span>count :20</span>
        <button className="p-1 px-2 rounded-lg bg-green-400">Add to cart</button>


    </div>
  )
}
