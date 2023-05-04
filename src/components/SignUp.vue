<template>
    <div>
      <h1>Cadastro de Paciente</h1>
      <form ref="patientForm" @submit.prevent="savePatient">
        <div>
          <label for="photo">Foto do Paciente:</label>
          <input type="file" id="photo" name="photo">
        </div>
        <div>
          <label for="name">Nome Completo do Paciente*:</label>
          <input type="text" id="name" name="name" v-model="name" required>
        </div>
        <div>
          <label for="motherName">Nome Completo da Mãe*:</label>
          <input type="text" id="motherName" name="motherName" v-model="motherName" required>
        </div>
        <div>
          <label for="birthdate">Data de Nascimento*:</label>
          <input type="date" id="birthdate" name="birthdate" v-model="birthdate" required>
        </div>
        <div>
          <label for="cpf">CPF*:</label>
          <input type="text" id="cpf" name="cpf" v-model="cpf" required>
        </div>
        <div>
          <label for="cns">CNS*:</label>
          <input type="text" id="cns" name="cns" v-model="cns" required>
        </div>
        <div>
          <label for="address">Endereço completo*:</label>
          <input type="text" id="address" name="address" v-model="address" required>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  </template>
  
  <script>
import axios from 'axios';

export default {
  name: 'SignUpPage',
  data() {
    return {
      name: '',
      motherName: '',
      birthdate: '',
      cpf: '',
      cns: '',
      address: ''
    };
  },
  methods: {
    savePatient() {
      const form = this.$refs.patientForm; // get the form element's reference
      if (!form.checkValidity()) {
        // form is invalid, do not submit
        alert('Preencha todos os campos obrigatórios!');
        return;
      }
      const patient = {
        name: this.name,
        motherName: this.motherName,
        birthdate: this.birthdate,
        cpf: this.cpf,
        cns: this.cns,
        address: this.address
      };
      
      axios.post('./api/patients', patient)
      .then(response => {
        console.log(response.data);
        alert('Paciente cadastrado com sucesso!');
      })
      .catch(error => {
        console.log(error);
        alert('Erro ao cadastrar paciente!');
      })      
    }
  }
}
</script>
