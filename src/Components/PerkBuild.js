import React, { useState } from "react"
import '../App.css'
import PerkList from "./PerkList"

function PerkBuild() {

    const [perkBuild] = useState([
        {
            id: 1,
            perk: null
        },
        {
            id: 2,
            perk: null
        },
        {
            id: 3,
            perk: null
        },
        {
            id: 4,
            perk: null
        }
    ])
    const [activeDiv, setActiveDiv] = useState(null)

    function perkClicked(perk) {
        perkBuild[activeDiv - 1].perk = perk
        if (activeDiv < 4) setActiveDiv(activeDiv + 1)
        if (activeDiv === 4) setActiveDiv(null)
    }


    return (
        <div class="container">
            <div class="row">
                {perkBuild.map(perk => {
                    return (<div class={"col-3 col-lg-1 " + (perk.id === activeDiv ? "activeItem" : "inactiveItem")} onClick={() => setActiveDiv(perk.id)}>
                        <img class="icon" alt={perk.Nazev} src={perk.perk ? 'http://localhost:1337' + perk.perk.Ikona.url : "/IconHelp_perks.png"} ></img>
                    </div>)
                })}
                <div class="col-3 col-lg-1 offset-lg-1">Item</div>
                <div class="col-3 col-lg-1">Addon1</div>
                <div class="col-3 col-lg-1">Addon2</div>
            </div>
            {activeDiv ? <PerkList perkSelected={perkClicked}></PerkList> : ""}


        </div>
    );
}

export default PerkBuild;