import React,{ useEffect, useState} from 'react';
import CustomTable from '../../components/customTable'

const VaccinationTable = ()=>{
const [vaccinationRange, setVaccinationRange] = useState([]);
const [vaccines, setVaccines] = useState([]);
const [vaccinesPerPatient, setVaccinesPerPatient] = useState([]);
const [patientDoB, setPatientDoB] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'vaccinesPerPatient.json'
            );
            const data = await response.json();
            setVaccinesPerPatient(data.vaccines);
            setPatientDoB(data.dayOfBirth);
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
            setVaccinationRange(data.vaccinationRange);
        };
        fetchData();

    }, []);

    return  <CustomTable rows={vaccines} columns={vaccinationRange} patientDoB={patientDoB} vaccinesPerPatient={vaccinesPerPatient} />
};
export default VaccinationTable;