import Resloc from "./resloc";
function Resmenu() {
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Veg Items</th>
          <th>Non-Veg Items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Paneer Butter Masala</td>
          <td>Chicken Biryani</td>
        </tr>
        <tr>
          <td>Mixed Veg Curry</td>
          <td>Mutton Curry</td>
        </tr>
        <tr>
          <td>Aloo Gobi</td>
          <td>Fish Fry</td>
        </tr>
        <tr>
          <td>Dal Tadka</td>
          <td>Grilled Chicken</td>
        </tr>
      </tbody>
    </table>
    <Resloc/>
    </>
  );
}

export default Resmenu;
