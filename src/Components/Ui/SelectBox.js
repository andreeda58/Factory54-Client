
const SelectBox=({values , ...rest})=>{

    const renderValues=values.map((value,index)=>{
        return <option key={index} value={value}>{value}</option>
    })

    return(<div >
        <select {...rest}>
            {renderValues}
        </select>
    </div>)
}


export default SelectBox;