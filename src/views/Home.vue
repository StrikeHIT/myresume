<template>
  <div class="home">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <div class="top-side">
        <picture-input ref="pictureInput" @change="onChange" width="200" height="280" margin="16" accept="image/jpeg,image/png" size="10" buttonClass="btn btn-success"
          :customStrings="{
            upload: '<h1>Bummer!</h1>',
            drag: 'Selecione sua foto',
            change: 'Alterar imagem'
          }">
        </picture-input>
        <div class="insides">
          <b-form-group label="Seu nome completo:">
            <b-form-input  v-model="form.name" placeholder="Seu nome completo" required></b-form-input>
          </b-form-group>

          <b-form-group label="Seu e-mail:">
            <b-form-input v-model="form.email" type="email" placeholder="Digite seu e-mail" required></b-form-input>
          </b-form-group>

          <b-form-group label="Seu telefone:">
            <b-form-input v-mask="'(##) # ####-####'" v-model="form.phone" placeholder="Digite seu telefone" required></b-form-input>
          </b-form-group>
        </div>
      </div>

      <b-form-group label="Seu endereço:">
        <b-form-input v-model="form.address" placeholder="Digite seu endereço" required></b-form-input>
      </b-form-group>

      <b-form-group label="UF:">
        <b-form-input v-mask="'AA'" v-model="form.uf" placeholder="Digite seu estado" required></b-form-input>
      </b-form-group>

      <b-form-group label="Seu CEP:">
        <b-form-input v-mask="'#####-###'" v-model="form.cep" placeholder="Digite seu CEP" required></b-form-input>
      </b-form-group>

      <b-form-group label="Sua Cidade:">
        <b-form-input v-model="form.city" placeholder="Digite sua cidade" required></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="success">Gerar CV</b-button>
    </b-form>
    
  </div>
</template>

<script>
// @ is an alias to /src
import PictureInput from 'vue-picture-input'

export default {
  name: 'Home',
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          address: '',
          cep: '',
          uf: '',
          city: ''
        },
        show: true
      }
    },
    components: {
      PictureInput
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.email = ''
        this.form.phone = ''
        this.form.address = ''
        this.form.cep = ''
        this.form.uf = ''
        this.form.city = ''

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      onChange (image) {
        console.log('New picture selected!')
        if (image) {
          console.log('Picture loaded.')
          this.image = image
        } else {
          console.log('FileReader API not supported: use the <form>, Luke!')
        }
      }
    }
}
</script>
