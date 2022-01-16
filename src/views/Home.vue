<template>
  <div class="home">
    <div class="steps-bar">
      <step-progress active-color="#0fe1a7" passive-color="#0fe1a7" :steps="['Dados pessoais', 'Experiências', 'Pré-visualização']" :current-step="stepform-1" icon-class="fa fa-check"></step-progress>
    </div>
    <b-form @submit="onSubmit" v-if="show">
      <transition name="slide" mode="out-in">
        <div key="1" id="step-one" v-if="stepform == 1">
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
                <b-form-input  name="name" v-model="form.name" placeholder="Seu nome completo" required></b-form-input>
              </b-form-group>

              <b-form-group label="Seu e-mail:">
                <b-form-input name="email" v-model="form.email" type="email" placeholder="Digite seu e-mail" required></b-form-input>
              </b-form-group>

              <b-form-group label="Seu telefone:">
                <b-form-input name="phone" v-mask="'(##) # ####-####'" v-model="form.phone" placeholder="Digite seu telefone" required></b-form-input>
              </b-form-group>
            </div>
          </div>

          <div class="split-inputs">
            <b-form-group label="Seu CEP:">
              <b-form-input name="cep" v-mask="'#####-###'" v-model="form.cep" placeholder="Digite seu CEP"></b-form-input>
            </b-form-group>

            <b-form-group label="UF:">
              <b-form-input name="uf" v-mask="'AA'" v-model="form.uf" placeholder="Digite seu estado" required></b-form-input>
            </b-form-group>
          </div>
          <div class="split-inputs">
            <b-form-group label="Sua Cidade:">
              <b-form-input name="city" v-model="form.city" placeholder="Digite sua cidade"></b-form-input>
            </b-form-group>

            <b-form-group label="Seu endereço:">
              <b-form-input name="address" v-model="form.address" placeholder="Digite seu endereço"></b-form-input>
            </b-form-group>
          </div>

          <div class="split-inputs">
            <b-form-group label="Data de nascimento:">
              <b-form-input name="date" v-mask="'##/##/####'" v-model="form.date" placeholder="Sua data de nascimento">Selecione</b-form-input>
            </b-form-group>

            <b-form-group label="Sexo:">
               <b-form-select name="sex" v-model="form.sex" text="Selecione" :options="options" class="form-control"></b-form-select>
            </b-form-group>
          </div>
          <div class="split-inputs">
            <b-form-group label="LinkedIn:">
              <b-form-input  name="linkedin" v-model="form.linkedin" placeholder="Seu LinkedIn" required></b-form-input>
            </b-form-group>

            <b-form-group label="Website:">
              <b-form-input  name="website" v-model="form.website" placeholder="Seu website" required></b-form-input>
            </b-form-group>
          </div>
        </div>
        <div key="2" id="step-two" v-if="stepform == 2">
          <b-form-group label="Perfil:">
              <b-form-textarea name="text" id="textarea" v-model="form.text" placeholder="Digite aqui um breve texto sobre você"  rows="3" max-rows="6" ></b-form-textarea>
          </b-form-group>

          <button class="infobutton" @click="layer.show1=true">Dicas<i class="fas fa-info-circle"></i></button>

          <div class="group-inputs">
            <h2 v-b-toggle.collapse-1 variant="primary"><div><i class="fas fa-briefcase"></i>Experiência profissional</div><i class="fas fa-chevron-down"></i></h2>
            <b-collapse id="collapse-1">
              <vue-cloneya  class="inputs-list" :minimum="1" :multiple="true"  v-model="form.experiences">
                <div class="inputs-list">
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Cargo</label>
                      <b-form-input type="text" class="form-control" placeholder="Seu cargo" v-cloneya-input="'office'"></b-form-input>
                    </div>
                    <div class="form-group">
                      <label>Cidade ou localidade:</label>
                      <b-form-input type="text" class="form-control" placeholder="Sua localidade" v-cloneya-input="'place'"></b-form-input>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Empregador/Empresa:</label>
                    <b-form-input type="text" class="form-control" placeholder="Seu empregador:" v-cloneya-input="'company'"></b-form-input>
                  </div>
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Data de início:</label>
                      <b-form-input v-mask="'##/##/####'" type="text" class="form-control" placeholder="Data de início:" v-cloneya-input="'datestart'"></b-form-input>
                    </div>
                    <div class="form-group">
                      <label>Data de término:</label>
                      <b-form-input v-mask="'##/##/####'" type="text" class="form-control" placeholder="Data de término" v-cloneya-input="'dateend'"></b-form-input>
                    </div>
                  </div>
                  <div class="form-group">
                      <label>Descrição:</label>
                      <b-form-textarea id="textarea" placeholder="Digite aqui uma breve descrição sobre sua experiência" rows="3" max-rows="6" v-cloneya-input="'text'"></b-form-textarea>
                  </div> 
                  <div class="nav-buttons">
                    <div class="remove" v-cloneya-remove tabindex="-1"><i class="fas fa-trash-alt"></i></div> 
                    <div class="add" v-cloneya-add tabindex="-1"><i class="fas fa-plus"></i></div>
                  </div> 
                </div>
              </vue-cloneya>
            </b-collapse>
          </div>
          <div class="group-inputs">
            <h2 v-b-toggle.collapse-2 variant="primary"><div><i class="fas fa-graduation-cap"></i>Formação e Qualificações</div><i class="fas fa-chevron-down"></i></h2>
            <b-collapse id="collapse-2">
              <vue-cloneya  class="inputs-list" :minimum="1" :multiple="true"  v-model="form.graduate">
                <div class="inputs-list">
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Grau</label>
                      <b-form-input type="text" class="form-control" placeholder="ex: Licenciatura" v-cloneya-input="'name'"></b-form-input>
                    </div>
                    <div class="form-group">
                      <label>Cidade ou localidade:</label>
                      <b-form-input type="text" class="form-control" placeholder="Sua localidade" v-cloneya-input="'place'"></b-form-input>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Escola:</label>
                    <b-form-input type="text" class="form-control" placeholder="Nome da instituição de ensino:" v-cloneya-input="'colege'"></b-form-input>
                  </div>
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Data de início:</label>
                      <b-form-input v-mask="'##/##/####'" type="text" class="form-control" placeholder="Data de início:" v-cloneya-input="'datestart'"></b-form-input>
                    </div>
                    <div class="form-group">
                      <label>Data de término:</label>
                      <b-form-input v-mask="'##/##/####'" type="text" class="form-control" placeholder="Data de término" v-cloneya-input="'dateend'"></b-form-input>
                    </div>
                  </div>
                  <div class="form-group">
                      <label>Descrição:</label>
                      <b-form-textarea id="textarea" placeholder="Digite aqui uma breve descrição" rows="3" max-rows="6" v-cloneya-input="'text'"></b-form-textarea>
                  </div> 
                  <div class="nav-buttons">
                    <div class="remove" v-cloneya-remove tabindex="-1"><i class="fas fa-trash-alt"></i></div> 
                    <div class="add" v-cloneya-add tabindex="-1"><i class="fas fa-plus"></i></div>
                  </div> 
                </div>
              </vue-cloneya>
            </b-collapse>
          </div>
          <div class="group-inputs">
            <h2 v-b-toggle.collapse-3 variant="primary"><div><i class="fas fa-volleyball-ball"></i>Interesses</div><i class="fas fa-chevron-down"></i></h2>
            <b-collapse id="collapse-3">
              <vue-cloneya  class="inputs-list" :minimum="1" :multiple="true"  v-model="form.interests">
                <div class="inputs-list">
                  <div class="form-group">
                    <label>Hobby</label>
                    <b-form-input type="text" class="form-control" placeholder="ex: Licenciatura" v-cloneya-input="'name'"></b-form-input>
                  </div>
                  <div class="nav-buttons">
                    <div class="remove" v-cloneya-remove tabindex="-1"><i class="fas fa-trash-alt"></i></div> 
                    <div class="add" v-cloneya-add tabindex="-1"><i class="fas fa-plus"></i></div>
                  </div> 
                </div>
              </vue-cloneya>
            </b-collapse>
          </div>
          <div class="group-inputs">
            <h2 v-b-toggle.collapse-4 variant="primary"><div><i class="fas fa-address-book"></i>Referências</div><i class="fas fa-chevron-down"></i></h2>
            <b-collapse id="collapse-4">
              <vue-cloneya  class="inputs-list" :minimum="1" :multiple="true"  v-model="form.references">
                <div class="inputs-list">
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Nome da empresa:</label>
                      <b-form-input  type="text" class="form-control" placeholder="Nome da empresa:" v-cloneya-input="'company'"></b-form-input>
                    </div>
                    <div class="form-group">
                      <label>Nome do contato:</label>
                      <b-form-input  type="text" class="form-control" placeholder="Nome do contato" v-cloneya-input="'contact'"></b-form-input>
                    </div>
                  </div>
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Número de Telefone:</label>
                      <b-form-input v-mask="'(##) # ####-####'" type="text" class="form-control" placeholder="Número de Telefone:" v-cloneya-input="'phone'"></b-form-input>
                    </div>
                    <div class="form-group">
                      <label>Endereço de email:</label>
                      <b-form-input type="email" class="form-control" placeholder="Endereço de email" v-cloneya-input="'email'"></b-form-input>
                    </div>
                  </div>
                  <div class="nav-buttons">
                    <div class="remove" v-cloneya-remove tabindex="-1"><i class="fas fa-trash-alt"></i></div> 
                    <div class="add" v-cloneya-add tabindex="-1"><i class="fas fa-plus"></i></div>
                  </div> 
                </div>
              </vue-cloneya>
            </b-collapse>
          </div>
          <div class="group-inputs">
            <h2 v-b-toggle.collapse-5 variant="primary"><div><i class="fas fa-mouse"></i>Aptidões</div><i class="fas fa-chevron-down"></i></h2>
            <b-collapse id="collapse-5">
              <vue-cloneya  class="inputs-list" :minimum="1" :multiple="true"  v-model="form.aptitudes">
                <div class="inputs-list">
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Aptidão:</label>
                      <b-form-input  type="text" class="form-control" placeholder="ex: Microsoft Word" v-cloneya-input="'name'"></b-form-input>
                    </div>
                    <div class="form-group">
                      <label>Nível de experiência:</label>
                      <b-form-select text="Selecionar nível" :options="levels" class="form-control" v-cloneya-input="'level'" ></b-form-select>
                    </div>
                  </div>
                  <div class="nav-buttons">
                    <div class="remove" v-cloneya-remove tabindex="-1"><i class="fas fa-trash-alt"></i></div> 
                    <div class="add" v-cloneya-add tabindex="-1"><i class="fas fa-plus"></i></div>
                  </div> 
                </div>
              </vue-cloneya>
            </b-collapse>
          </div>
        </div>
        <div key="3" id="step-three" v-if="stepform == 3">
          <vue-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :preview-modal="true" :paginate-elements-by-height="1400"
            :filename="form.name" :pdf-quality="2" :manual-pagination="false" pdf-format="a4" pdf-orientation="landscape"
            pdf-content-width="800px"  @progress="onProgress($event)" @hasStartedGeneration="hasStartedGeneration()" @hasGenerated="hasGenerated($event)"
            @beforeDownload="beforeDownload($event)"  @hasDownloaded="hasDownloaded($event)" ref="html2Pdf">
            <section id="pdf-content" slot="pdf-content">
              <div class="left-side">
                <h2>{{form.name}}</h2>
                <img :src="image">
              </div>
             
            </section>
          </vue-html2pdf>
          <button class="downloadpdf" @click="generateReport">Baixe seu PDF<i class="fas fa-download"></i></button>
        </div>
      </transition>
      <div class="nav-buttons next-prev">
        <button id="prev" v-if="stepform > 1"  @click="stepform--"><i class="fas fa-backward"></i>Voltar</button>
        <button id="next" v-if="stepform < 3"  @click="stepform++">Avançar<i class="fas fa-forward"></i></button>
      </div>
      
      
      <!-- <b-button type="submit" variant="success">Gerar CV</b-button> -->
    </b-form>
    <popup-layer class="popup-layer" :visible.sync="layer.show1">
      <div>
        <strong>Dicas</strong><br>
        1.O seu perfil será colocado no topo do seu currículo.<br>
        2.Descreva-se de forma curta, tendo em conta a vaga e o cargo em questão..<br>
        3.Crie um bom perfil ao mencionar: objetivos, ambições, conquistas e o que procura.<br>
      </div>
      <button @click="layer.show1=false">Fechar</button>
    </popup-layer>
  </div>
</template>

<script>
// @ is an alias to /src
import PictureInput from 'vue-picture-input';
import StepProgress from 'vue-step-progress';
import VueHtml2pdf from 'vue-html2pdf';

export default {
  name: 'Home',
    data() {
      return {
        stepform: 1,
        layer: {
          show1: false
        },
        options: [
          {text: 'Selecione', value: null},
          {text: 'Masculino', value: 'Masculino'},
          {text: 'Feminino', value: 'Feminino'},
          {text: 'Outros', value: 'Outros'},
        ],
        levels: [
          {text: 'Selecionar nível', value: null},
          {text: 'Experiente', value: 'Experiente'},
          {text: 'Com experiência', value: 'Com experiência'},
          {text: 'Com alguma experiência', value: 'Com alguma experiência'},
          {text: 'Principiante', value: 'Principiante'},
          {text: 'Novato', value: 'Novato'},
        ],
        form: {
          name: '',
          email: '',
          phone: '',
          address: '',
          cep: '',
          uf: '',
          city: '',
          sex: null,
          date: '',
          linkedin: '',
          website: '',
          text: '',
          experiences: [],
          graduate: [],
          interests: [],
          references: [],
          aptitudes: []
        },
        show: true
      }
    },
    components: {
      PictureInput,
      'step-progress': StepProgress,
      VueHtml2pdf
    },
    methods: {
      generateReport () {
          this.$refs.html2Pdf.generatePdf()
      },
      onSubmit(event) {
        event.preventDefault()
        console.log(JSON.stringify(this.form))
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
