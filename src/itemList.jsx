function Item({ name, isPacked = false }) {
    return (
        <li key={name}>
            {name} {isPacked ? "✔" : "❌"}
        </li>
    );
}
 
export default function ItemList() {
    const items = [
        { name: "Sunglass", isPacked: false },
        { name: "Sunblock", isPacked: true },
        { name: "Swimming suit", isPacked: true },
        { name: "Powerbank", isPacked: false }
    ];
 
    const itemsList = items.map((item, index) => (
        <Item key={index} name={item.name} isPacked={item.isPacked} />
    ));
 
    return (
        <ul>
            {itemsList}
        </ul>
    );
}