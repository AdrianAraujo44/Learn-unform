import React, { useRef, useState } from 'react'
import { TextInput } from "./components/Inputs/Text";
import { Form } from '@unform/web'
import { Button } from './components/Button';
import { SelectInput } from './components/Inputs/Select';
import { DateInput } from './components/Inputs/Date';
import { TimeInput } from './components/Inputs/Time';
import { RadioInput } from './components/Inputs/Radio';

import './App.css'

function App() {
  const formRef = useRef()
  const [address, setAddress] = useState({})

  const handleFormSubmit = data => {
    console.log(data)
  }

  const getAddress = (cep) => {
    fetch(`https://api.pagar.me/1/zipcodes/${cep}`)
      .then(res => res.json())
      .then(data => {
        setAddress(data)
      })
  }

  const selectOptions = [
    { value: "em andamento", label: "Em andamento" },
    { value: "finalizado", label: "Finalizado" }
  ];

  const radioOptions = [
    {
      id: "tem forças amigas",
      label: "Tem forças amigas"
    },
    {
      id: "não tem forças amigas",
      label: "Não tem forças amigas"
    }
  ]

  return (
    <div className="App">
      <h1 className="title">Cadastrar Operação</h1>
      <Form ref={formRef} onSubmit={handleFormSubmit} initialData={{ force: "tem forças amigas" }}>
        <div className="row">
          <TextInput name='name' label='Nome' />
          <SelectInput name="status" label='Status' options={selectOptions} />
          <RadioInput name="force" options={radioOptions} />
        </div>
        <div className="row">
          <DateInput name="date" label="Data" />
          <TimeInput name="time" label="Hora" />
        </div>
        <div className="row">
          <TextInput name="cep" label='CEP' onBlur={(cep) => getAddress(cep.target.value)}/>
          <TextInput name="state" label='Estado' defaultValue={address.state} />
          <TextInput name="city" label='Cidade' defaultValue={address.city} />
          <TextInput name="neighborhood" label='Bairro' defaultValue={address.neighborhood} />
          <TextInput name="street" label='Rua' defaultValue={address.street} />
          <TextInput name="number" label='Número' />
          <TextInput name="complement" label='Complemento' />
        </div>
        <Button />
      </Form>
    </div>
  );
}

export default App;
