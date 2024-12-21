import React from 'react'

const hirdetesFeladas = () => {
    const [name, setName] = useState("");
  return (
    <div>
        <form>
        <label for="kategs">Válasszon kategóriát:</label>
            <select id="kategs" name="kategóriák">

                <option value="value1">Első kategória</option> 
            </select>
            <label for="ing">Ingatlan leírása:</label>
            <input type="text" id="ing" name="ing"></input>

            <label for="tehermentes"> Tehermentes ingatlan</label>
            <input type="checkbox" id="tehermentes" name="tehermentes" value="tehermentes"></input>
            
            <label for="fenykep">Fénykép az ingatlanról: </label>
            <input type="text" id="fenykep" name="fenykep"></input>

            <input type="submit" value="Küldés" />
            </form>
    </div>
  )
}

export default hirdetesFeladas