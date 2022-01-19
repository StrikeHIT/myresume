<template>
  <div class="home">
    <div class="steps-bar">
      <step-progress active-color="#0fe1a7" passive-color="#0fe1a7" :steps="['Dados pessoais', 'Experiências', 'Pré-visualização']" :current-step="stepform-1" icon-class="fa fa-check"></step-progress>
    </div>
    <b-form @submit="onSubmit" v-if="show">
      <transition name="slide" mode="out-in">
        <div key="1" id="step-one" v-if="stepform == 1">
          <div class="top-side">
            <div class="divimgposition">
              <picture-input v-model="image" :value="image" ref="pictureInput" @change="onChange" width="200" height="280" margin="16" accept="image/jpeg,image/png" size="10" buttonClass="btn btn-success"
                :customStrings="{
                  upload: '<h1>Bummer!</h1>',
                  drag: 'Selecione sua foto',
                  change: 'Alterar imagem'
                }">
              </picture-input>
              <img v-if="image" :src="image">
            </div>
            
            <div class="insides">
              <b-form-group label="Seu nome completo:">
                <input  name="name" v-model="form.name"  class="form-control" placeholder="Seu nome completo" required>
              </b-form-group>

              <b-form-group label="Seu e-mail:">
                <input name="email" v-model="form.email" type="email"  class="form-control" placeholder="Digite seu e-mail" required>
              </b-form-group>

              <b-form-group label="Seu telefone:">
                <input name="phone" v-mask="'(##) # ####-####'" v-model="form.phone"  class="form-control" placeholder="Digite seu telefone" required>
              </b-form-group>
            </div>
          </div>

          <div class="split-inputs">
            <b-form-group label="Seu CEP:">
              <input name="cep" v-mask="'#####-###'" v-model="form.cep"  class="form-control" placeholder="Digite seu CEP">
            </b-form-group>

            <b-form-group label="UF:">
              <input name="uf" v-mask="'AA'" v-model="form.uf"  class="form-control" placeholder="Digite seu estado" required>
            </b-form-group>
          </div>
          <div class="split-inputs">
            <b-form-group label="Sua Cidade:">
              <input name="city" v-model="form.city"  class="form-control" placeholder="Digite sua cidade">
            </b-form-group>

            <b-form-group label="Seu endereço:">
              <input name="address" v-model="form.address"  class="form-control" placeholder="Digite seu endereço">
            </b-form-group>
          </div>

          <div class="split-inputs">
            <b-form-group label="Data de nascimento:">
              <input name="date" type="date" v-model="form.date" class="form-control" placeholder="Sua data de nascimento">
            </b-form-group>

            <b-form-group label="Sexo:">
              <select name="sex" v-model="form.sex" text="Selecione" class="form-control">
                <option value="Selecione">Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outros">Outros</option>
              </select>
            </b-form-group>
          </div>
          <div class="split-inputs">
            <b-form-group label="LinkedIn:">
              <input  name="linkedin" v-model="form.linkedin"  class="form-control" placeholder="Seu LinkedIn" required>
            </b-form-group>

            <b-form-group label="Website:">
              <input  name="website" v-model="form.website"  class="form-control" placeholder="Seu website" required>
            </b-form-group>
          </div>
        </div>
        <div key="2" id="step-two" v-if="stepform == 2">
          <b-form-group label="Perfil:">
              <textarea  class="form-control" name="text" id="textarea" v-model="form.text" placeholder="Digite aqui um breve texto sobre você"  rows="3" max-rows="6" ></textarea>
          </b-form-group>

          <div class="infobutton simulatebuttons" @click="layer.show1=true">Dicas<i class="fas fa-info-circle"></i></div>

          <div class="group-inputs">
            <h2 v-b-toggle.collapse-1 variant="primary"><div><i class="fas fa-briefcase fa-fw"></i>Experiência profissional</div><i class="fas fa-chevron-down"></i></h2>
            <b-collapse id="collapse-1">
              <vue-cloneya  class="inputs-list" :minimum="1" :multiple="true"  v-model="experiences">
                <div class="inputs-list">
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Cargo</label>
                      <input type="text" class="form-control" placeholder="Seu cargo" v-cloneya-input="'office'">
                    </div>
                    <div class="form-group">
                      <label>Cidade ou localidade:</label>
                      <input type="text" class="form-control" placeholder="Sua localidade" v-cloneya-input="'place'">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Empregador/Empresa:</label>
                    <input type="text" class="form-control" placeholder="Seu empregador:" v-cloneya-input="'company'">
                  </div>
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Data de início:</label>
                      <input type="date" class="form-control" placeholder="Data de início:" v-cloneya-input="'datestart'">
                    </div>
                    <div class="form-group">
                      <label>Data de término:</label>
                      <input type="date" class="form-control" placeholder="Data de término" v-cloneya-input="'dateend'">
                    </div>
                  </div>
                  <div class="form-group">
                      <label>Descrição:</label>
                      <textarea  class="form-control" id="textarea" placeholder="Digite aqui uma breve descrição sobre sua experiência" rows="3" max-rows="6" v-cloneya-input="'text'"></textarea>
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
            <h2 v-b-toggle.collapse-2 variant="primary"><div><i class="fas fa-graduation-cap fa-fw"></i>Formação e Qualificações</div><i class="fas fa-chevron-down"></i></h2>
            <b-collapse id="collapse-2">
              <vue-cloneya  class="inputs-list" :minimum="1" :multiple="true"  v-model="graduate">
                <div class="inputs-list">
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Grau</label>
                      <input type="text" class="form-control" placeholder="ex: Licenciatura" v-cloneya-input="'name'">
                    </div>
                    <div class="form-group">
                      <label>Cidade ou localidade:</label>
                      <input type="text" class="form-control" placeholder="Sua localidade" v-cloneya-input="'place'">
                    </div>
                  </div>
                  <div class="form-group">
                    <label>Escola:</label>
                    <input type="text" class="form-control" placeholder="Nome da instituição de ensino:" v-cloneya-input="'colege'">
                  </div>
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Data de início:</label>
                      <input type="date" class="form-control" placeholder="Data de início:" v-cloneya-input="'datestart'">
                    </div>
                    <div class="form-group">
                      <label>Data de término:</label>
                      <input type="date" class="form-control" placeholder="Data de término" v-cloneya-input="'dateend'">
                    </div>
                  </div>
                  <div class="form-group">
                      <label>Descrição:</label>
                      <textarea  class="form-control" id="textarea" placeholder="Digite aqui uma breve descrição" rows="3" max-rows="6" v-cloneya-input="'text'"></textarea>
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
            <h2 v-b-toggle.collapse-3 variant="primary"><div><i class="fas fa-volleyball-ball fa-fw"></i>Interesses</div><i class="fas fa-chevron-down"></i></h2>
            <b-collapse id="collapse-3">
              <vue-cloneya  class="inputs-list" :minimum="1" :multiple="true"  v-model="interests">
                <div class="inputs-list">
                  <div class="form-group">
                    <label>Hobby</label>
                    <input type="text" class="form-control" placeholder="ex: Licenciatura" v-cloneya-input="'name'">
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
            <h2 v-b-toggle.collapse-4 variant="primary"><div><i class="fas fa-address-book fa-fw"></i>Referências</div><i class="fas fa-chevron-down"></i></h2>
            <b-collapse id="collapse-4">
              <vue-cloneya  class="inputs-list" :minimum="1" :multiple="true"  v-model="references">
                <div class="inputs-list">
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Nome da empresa:</label>
                      <input  type="text" class="form-control" placeholder="Nome da empresa:" v-cloneya-input="'company'">
                    </div>
                    <div class="form-group">
                      <label>Nome do contato:</label>
                      <input  type="text" class="form-control" placeholder="Nome do contato" v-cloneya-input="'contact'">
                    </div>
                  </div>
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Número de Telefone:</label>
                      <input v-mask="'(##) # ####-####'" type="text" class="form-control" placeholder="Número de Telefone:" v-cloneya-input="'phone'">
                    </div>
                    <div class="form-group">
                      <label>Endereço de email:</label>
                      <input type="email" class="form-control" placeholder="Endereço de email" v-cloneya-input="'email'">
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
            <h2 v-b-toggle.collapse-5 variant="primary"><div><i class="fas fa-mouse fa-fw"></i>Aptidões</div><i class="fas fa-chevron-down"></i></h2>
            <b-collapse id="collapse-5">
              <vue-cloneya  class="inputs-list" :minimum="1" :multiple="true"  v-model="aptitudes">
                <div class="inputs-list">
                  <div class="split-inputs">
                    <div class="form-group">
                      <label>Aptidão:</label>
                      <input  type="text" class="form-control" placeholder="ex: Microsoft Word" v-cloneya-input="'name'">
                    </div>
                    <div class="form-group">
                      <label>Nível de experiência:</label>
                      <select class="form-control" v-cloneya-input="'level'" >
                        <option value="5">Experiente</option>
                        <option value="4">Com experiência</option>
                        <option value="3">Com alguma experiência</option>
                        <option value="2">Principiante</option>
                        <option value="1">Novato</option>
                      </select>
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
          <vue-html2pdf :show-layout="false" :float-layout="true" :enable-download="true" :filename="form.name" :pdf-quality="2"  :paginate-elements-by-height="1400" :manual-pagination="false" pdf-format="a4" pdf-orientation="portrait"
            pdf-content-width="775px" ref="html2Pdf">
            <section id="pdf-content" slot="pdf-content" style="display:flex;font-family: 'Poppins', sans-serif;">
              <div class="left-side" style="width: 250px;text-align: left;margin-right: 20px;border-right:1px solid #cbcbcb;">
                <h2 style="max-width:calc(100% - 30px);margin-left: auto;margin-right: auto;font-size: 16px;font-weight: bold;margin-top: 30px;text-align: center;">{{form.name}}</h2>
                <div style="margin-left:auto;margin-right:auto;width: 180px;border-radius: 100%;overflow: hidden;height: 180px;display: flex;align-items: flex-start;justify-content: center;border: 3px solid #cbcbcb;margin-top: 10px;">
                  <img v-if="image" style="width: 180px;" :src="image">
                </div>
                <div class="list-personal-details" style="width: calc(100% - 30px);margin-left: auto;margin-right: auto;margin-top: 20px;">
                  <div v-if="form.name" class="details-infos" style="display: flex;margin-bottom:15px;">
                    <i class="fas fa-user fa-fw fa-sm"></i>
                    <div>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;"><strong style="margin-bottom:2px;">Nome:</strong></p>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;text-transform: capitalize;">{{form.name}}</p>
                    </div>
                  </div>
                  <div v-if="form.email" class="details-infos" style="display: flex;margin-bottom:15px;">
                    <i class="fas fa-envelope fa-fw fa-sm"></i>
                    <div>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;"><strong  style="margin-bottom:2px;">E-mail:</strong></p>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;">{{form.email}}</p>
                    </div>
                  </div>
                  <div v-if="form.phone" class="details-infos" style="display: flex;margin-bottom:15px;">
                    <i class="fas fa-phone fa-fw fa-sm"></i>
                    <div>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;"><strong  style="margin-bottom:2px;">Telefone:</strong></p>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;">{{form.phone}}</p>
                    </div>
                  </div>
                  <div v-if="form.cep" class="details-infos" style="display: flex;margin-bottom:15px;">
                    <i class="fas fa-map-pin fa-fw fa-xs" style="line-height:25px;"></i>
                    <div>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;"><strong  style="margin-bottom:2px;">Endereço:</strong></p>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;">
                        {{form.uf}} | {{form.cep}}<br>
                        {{form.city}} <br>
                        {{form.address}}
                      </p>
                    </div>
                  </div>
                  <div v-if="form.date" class="details-infos" style="display: flex;margin-bottom:10px;">
                    <i class="fas fa-calendar-day" style="margin-top:2px;"></i>
                    <div>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;"><strong  style="margin-bottom:2px;">Data de nascimento:</strong></p>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;">{{format_date(form.date)}}</p>
                    </div>
                  </div>
                  <div v-if="form.linkedin" class="details-infos" style="display: flex;margin-bottom:10px;">
                    <i class="fab fa-linkedin" style="margin-top:2px;"></i>
                    <div>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;"><strong  style="margin-bottom:2px;">Linkedin:</strong></p>
                      <p style="font-size: 13px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;word-break: break-all;">{{form.linkedin}}</p>
                    </div>
                  </div>
                  <div v-if="form.website" class="details-infos" style="display: flex;margin-bottom:10px;">
                    <i class="fas fa-link" style="margin-top:2px;"></i>
                    <div>
                      <p style="font-size: 14px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;"><strong  style="margin-bottom:2px;">Website:</strong></p>
                      <p style="font-size: 13px;margin-bottom: 0px;margin-left: 11px;line-height: 1.2em;word-break: break-all;">{{form.website}}</p>
                    </div>
                  </div>
                  <div v-if="interests[0].name">
                    <h2 style="font-size: 15px;font-weight: bold;margin-top: 30px;margin-bottom: 2px;">Interesses</h2>
                    <ul style="padding-left:20px;">
                      <li v-for="interest of interests" :key="interest.name" style="font-size: 14px;">
                        {{interest.name}}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="right-side" style="width:calc(100% - 270px);margin-right:15px;">
                <div class="inside">
                    <p style="margin-top: 30px;text-align: left;line-height: 1.2em;line-height: 1.2em;font-size:14px;">
                      {{form.text}}
                    </p>
                    <div v-if="experiences[0].office">
                      <h2 style="font-size: 17px;font-weight: bold;margin-top: 30px;margin-bottom: 2px;text-align:left;">Experiências</h2>
                      <ul style="padding-left:0px;margin-top:10px;">
                        <li v-for="experience of experiences" :key="experience.office" style="margin-top:20px;font-size: 14px;text-align:left;list-style:none;border-bottom:1px solid #cbcbcb;padding-bottom:20px;">
                          <div style="display:flex;justify-content: space-between;"><strong>{{experience.office}}</strong> <p style="margin:0px;">{{format_date(experience.datestart)}} <b  style="font-weight:500;" v-if="experience.dateend">-</b> {{format_date(experience.dateend)}}</p></div>
                          <div>{{experience.company}} <b style="font-weight:500;" v-if="experience.place">|</b> {{experience.place}}</div>
                          <div><p style="margin-top: 8px;">{{experience.text}}</p></div>
                        </li>
                      </ul>
                    </div>
                    <div v-if="graduate[0].name">
                      <h2 style="font-size: 17px;font-weight: bold;margin-top: 30px;margin-bottom: 2px;text-align:left;">Formação e Qualificações</h2>
                      <ul style="padding-left:0px;margin-top:10px;">
                        <li v-for="graduateit of graduate" :key="graduateit.name" style="margin-top:20px;font-size: 14px;text-align:left;list-style:none;border-bottom:1px solid #cbcbcb;padding-bottom:20px;">
                          <div style="display:flex;justify-content: space-between;"><strong>{{graduateit.name}}</strong> <p style="margin:0px;">{{format_date(graduateit.datestart)}} <b  style="font-weight:500;" v-if="graduateit.dateend">-</b> {{format_date(graduateit.dateend)}}</p></div>
                          <div>{{graduateit.colege}} <b style="font-weight:500;" v-if="graduateit.place">|</b> {{graduateit.place}}</div>
                          <div><p style="margin-top: 8px;">{{graduateit.text}}</p></div>
                        </li>
                      </ul>
                    </div>
                    <div v-if="aptitudes[0].name">
                      <h2 style="font-size: 17px;font-weight: bold;margin-top: 30px;margin-bottom: 2px;text-align:left;">Aptidões</h2>
                      <ul style="padding-left:0px;margin-top:10px;">
                        <li v-for="aptitude of aptitudes" :key="aptitude.name" style="font-size: 14px;text-align:left;list-style:none;">
                          <div style="display:flex;align-items: center;margin-top:3px;margin-bottom:3px;">
                            <p style="width: 200px;line-height: 1.2em;margin:0px;">{{aptitude.name}}</p>
                            <div v-if="aptitude.level" style="display:flex;margin-left: 50px;align-items: center;">
                              <i v-if="aptitude.level >= 1" class="fas fa-star"></i><i v-else class="far fa-star"></i>
                              <i v-if="aptitude.level >= 2" class="fas fa-star"></i><i v-else class="far fa-star"></i>
                              <i v-if="aptitude.level >= 3" class="fas fa-star"></i><i v-else class="far fa-star"></i>
                              <i v-if="aptitude.level >= 4" class="fas fa-star"></i><i v-else class="far fa-star"></i>
                              <i v-if="aptitude.level >= 5" class="fas fa-star"></i><i v-else class="far fa-star"></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div v-if="references[0].contact">
                      <h2 style="font-size: 17px;font-weight: bold;margin-top: 40px;margin-bottom: 2px;text-align:left;margin-bottom:5px;">Referências</h2>
                      <ul style="padding-left:0px;margin-top:0px;">
                        <li v-for="reference of references" :key="reference.contact" style="display:flex;justify-content: space-between;margin-top:10px;font-size: 14px;text-align:left;list-style:none;padding-bottom:20px;">
                          <div>
                            <p style="margin:0px;"><strong>{{reference.contact}}</strong></p>
                            <p style="margin:0px;">{{reference.phone}}</p>
                            <p style="margin:0px;">{{reference.email}}</p>
                          </div>
                          <div><p style="font-size:13px;">{{reference.company}}</p></div>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </section>
          </vue-html2pdf>
          <button class="downloadpdf" @click="generateReport">Baixe seu PDF<i class="fas fa-download"></i></button>
        </div>
      </transition>
    </b-form>
    <div class="nav-buttons next-prev">
      <div class="simulatebuttons" id="prev" v-if="stepform > 1"  @click="stepform--"><i class="fas fa-backward"></i>Voltar</div>
      <div class="simulatebuttons" id="next" v-if="stepform < 3"  @click="stepform++">Avançar<i class="fas fa-forward"></i></div>
    </div>
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
import moment from 'moment';


export default {
  name: 'Home',
    data() {
      return {
        image: '',
        stepform: 1,
        layer: {
          show1: false
        },
        interests: [{
          name: null
        }],
        experiences: [{
          office: null,
          place: null,
          company: null,
          datestart: null,
          dateend: null,
          text: null
        }],
        graduate: [{
          name: null,
          place: null,
          colege: null,
          datestart: null,
          dateend: null,
          text: null
        }],
        references: [{
          company: null,
          contact: null,
          phone: null,
          email: null
        }],
        aptitudes: [{
          name: null,
          level: null
        }],
        form: {
          name: '',
          email: '',
          phone: '',
          address: '',
          cep: '',
          uf: '',
          city: '',
          sex: 'Selecione',
          date: '',
          linkedin: '',
          website: '',
          text: ''
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
      format_date(value){
         if (value) {
           return moment(String(value)).format('MM/YYYY')
          }
      },
      generateReport () {
          this.$refs.html2Pdf.generatePdf()
      },
      onSubmit(event) {
        event.preventDefault()
        // console.log(JSON.stringify(this.form))
      },
      onChange (image) {
        if (image) {
          this.image = image
        }
      }
    }
}
</script>
