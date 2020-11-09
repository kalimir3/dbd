import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PerkList(props) {
    const [perks, setPerks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios('http://localhost:1337/perks');
            setPerks(response.data);
        }
        fetchData()
    }, []);

    return (
        <div class="container ">
            <h1>Zoznam perkov</h1>
            <div class="row">
                {perks.map(perk => {
                    const url = perk.Ikona ? 'http://localhost:1337' + perk.Ikona.url : "/IconHelp_perks.png"
                    return (
                        <div class="col-3 col-md-2 col-lg-1 p-1">
                            <div class="PerkContainer">
                                {props.perkSelected ?
                                    <img class="icon" alt={perk.Nazev} src={url} onClick={() => props.perkSelected(perk)}  /> :
                                    <img class="icon" alt={perk.Nazev} src={url} />}
                                <p>{perk.Nazev}</p>
                                {props.useTooltips ?
                                    <div class="PerkPopis">
                                        <h1>{perk.Nazev}</h1>
                                        <h2>{perk.Popis}</h2>
                                    </div> : ""}

                            </div>
                        </div>)
                })}</div>
        </div>
    )
}

export default PerkList;