import { useEffect } from "react";

/**
 * ligne de produit dans un tableau à 2 colonnes (nom/prix)
 * @param {{name: string, stocked: boolean, price:string}} product
 */

export function ProductRow({ product }) {
  const style = product.stocked ? undefined : { color: "red" };

  
  throw new Error("azea");
  

  // useEffect(() => {
  //   pro.demo
  // },[]);
  return (
    // <tr onClick={handleClick}>
     <tr> 
      <td style={style}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
