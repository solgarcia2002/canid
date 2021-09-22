import React,{ useEffect, useState} from 'react';
import CustomTable from '../../components/customTable'

const VaccinationTable = ()=>{
const [vaccinationRange, setVaccinationRange] = useState([]);
const [vaccines, setVaccines] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'vaccinationRange.json'
            );
            const data = await response.json();
            setVaccinationRange(data.vaccinationRange);
        };
        fetchData();

    }, []);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'vaccines.json'
            );
            const data = await response.json();
            setVaccines(data.vaccines);
        };
        fetchData();

    }, []);

    return  <CustomTable rows={vaccines} columns={vaccinationRange} />
};
export default VaccinationTable;