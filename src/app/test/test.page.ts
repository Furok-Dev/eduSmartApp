/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GetResultService } from '../service/get-result.service';
import { QuestionsService } from '../service/questions.service';

// areas del test vocacional
const area1 = 'arte y creatividad';
const area2 = 'ciencias sociales';
const area3 = 'económica,administrativa y financiera';
const area4 = 'ciencia y tecnología';
const area5 = 'ciencias ecológicas,biológicas y de salud';

// carreras segun el area

const arteCreatividad = [
  'Arquitectura Moda y Diseño',
  'Publicidad, Marketing y RRPP',
  'Arte y Bellas Artes',
  'Imagen y Sonido',
];
const cienciasSociales = [
  'Ciencias Sociales y Humanidades',
  'Comunicación, Periodismo, Cs de la Información',
  'Derecho y Leyes',
  'Educación',
  'Psicología y Ciencias del Comportamiento',
  'Hotelería, Gastronomía y Turismo',
  'Idiomas',
  'Recursos Humanos y Riesgo Laboral',
  'Ciencias Políticas',
  'Lengua y Literatura',
  'Historia y Geografía',
];
const economiaAdministracion = [
  'Administración y Administración Pública',
  'Contabilidad',
  'Matemática, Economía y Finanzas',
  'Comercio y Relaciones Internacionales',
];
const cienciaTecnologia = [
  'Física y Química',
  'Ingeniería y Tecnología',
  'Electrónica y Electricidad',
  'Informática e Información',
  'Transporte y Logística',
  'Bibliotecología y Archivología',
];
const cienciasEcologicas = [
  'Ciencias Agrarias',
  'Medio Ambiente y Geología',
  'Salud y Medicina',
  'Veterinaria',
  'Nutrición y Alimentación',
  'Ciencias Biológicas',
  'Deportes y Educación Física',
  'Seguridad, Criminología y Estudios Forenses',
];

let areaDB = '';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  constructor(private questionsService: QuestionsService, private universitiesService: GetResultService, private navCtrl: NavController) { }
  data: any;
  dataDB: any;
  resultData: Array<any> = [];
  dataCareers: any;
  //arte y creatividad
  p4: any;
  p9: any;
  p12: any;
  p20: any;
  p28: any;
  p31: any;
  p35: any;
  p39: any;
  preguntasArea1: Array<string> = [];
  acuArea1: number = 0;

  //ciencias sociales
  p6: any;
  p13: any;
  p23: any;
  p25: any;
  p34: any;
  p37: any;
  p38: any;
  p42: any;
  preguntasArea2: Array<string> = [];
  acuArea2: number = 0;

  //económica: any;administrativa y financiera
  p5: any;
  p10: any;
  p15: any;
  p19: any;
  p21: any;
  p26: any;
  p29: any;
  p33: any;
  preguntasArea3: Array<string> = [];
  acuArea3: number = 0;

  //ciencia y tecnología
  p1: any;
  p7: any;
  p11: any;
  p17: any;
  p18: any;
  p24: any;
  p30: any;
  p41: any;
  preguntasArea4: Array<string> = [];
  acuArea4: number = 0;

  //ciencias ecológicas: any;biológicas y de salud

  p2: any;
  p3: any;
  p8: any;
  p16: any;
  p22: any;
  p27: any;
  p32: any;
  preguntasArea5: Array<string> = [];
  acuArea5: number = 0;

  async getTest() {
    this.p4 = document.getElementById('4');
    this.p9 = document.getElementById('9');
    this.p12 = document.getElementById('12');
    this.p20 = document.getElementById('20');
    this.p28 = document.getElementById('28');
    this.p31 = document.getElementById('31');
    this.p35 = document.getElementById('35');
    this.p39 = document.getElementById('39');
    this.preguntasArea1.push(this.p4.value);
    this.preguntasArea1.push(this.p9.value);
    this.preguntasArea1.push(this.p12.value);
    this.preguntasArea1.push(this.p20.value);
    this.preguntasArea1.push(this.p28.value);
    this.preguntasArea1.push(this.p31.value);
    this.preguntasArea1.push(this.p35.value);
    this.preguntasArea1.push(this.p39.value);


    this.p6 = document.getElementById('6');
    this.p13 = document.getElementById('13');
    this.p23 = document.getElementById('23');
    this.p25 = document.getElementById('25');
    this.p34 = document.getElementById('34');
    this.p37 = document.getElementById('37');
    this.p38 = document.getElementById('38');
    this.p42 = document.getElementById('42');
    this.preguntasArea2.push(this.p6.value);
    this.preguntasArea2.push(this.p13.value);
    this.preguntasArea2.push(this.p23.value);
    this.preguntasArea2.push(this.p25.value);
    this.preguntasArea2.push(this.p34.value);
    this.preguntasArea2.push(this.p37.value);
    this.preguntasArea2.push(this.p38.value);
    this.preguntasArea2.push(this.p42.value);


    this.p5 = document.getElementById('5');
    this.p10 = document.getElementById('10');
    this.p15 = document.getElementById('15');
    this.p19 = document.getElementById('19');
    this.p21 = document.getElementById('21');
    this.p26 = document.getElementById('26');
    this.p29 = document.getElementById('29');
    this.p33 = document.getElementById('33');
    this.preguntasArea3.push(this.p5.value);
    this.preguntasArea3.push(this.p10.value);
    this.preguntasArea3.push(this.p15.value);
    this.preguntasArea3.push(this.p19.value);
    this.preguntasArea3.push(this.p21.value);
    this.preguntasArea3.push(this.p26.value);
    this.preguntasArea3.push(this.p29.value);
    this.preguntasArea3.push(this.p33.value);


    this.p1 = document.getElementById('1');
    this.p7 = document.getElementById('7');
    this.p11 = document.getElementById('11');
    this.p17 = document.getElementById('17');
    this.p18 = document.getElementById('18');
    this.p24 = document.getElementById('24');
    this.p30 = document.getElementById('30');
    this.p41 = document.getElementById('41');
    this.preguntasArea4.push(this.p1.value);
    this.preguntasArea4.push(this.p7.value);
    this.preguntasArea4.push(this.p11.value);
    this.preguntasArea4.push(this.p17.value);
    this.preguntasArea4.push(this.p18.value);
    this.preguntasArea4.push(this.p24.value);
    this.preguntasArea4.push(this.p30.value);
    this.preguntasArea4.push(this.p41.value);


    this.p2 = document.getElementById('2');
    this.p3 = document.getElementById('3');
    this.p8 = document.getElementById('8');
    this.p16 = document.getElementById('16');
    this.p22 = document.getElementById('22');
    this.p27 = document.getElementById('27');
    this.p32 = document.getElementById('32');
    this.preguntasArea5.push(this.p2.value);
    this.preguntasArea5.push(this.p3.value);
    this.preguntasArea5.push(this.p8.value);
    this.preguntasArea5.push(this.p16.value);
    this.preguntasArea5.push(this.p22.value);
    this.preguntasArea5.push(this.p27.value);
    this.preguntasArea5.push(this.p32.value);

    for (let i of this.preguntasArea1) {
      if (i === 'MeInteresa') {
        this.acuArea1 += 1;
      }
    }
    for (let i of this.preguntasArea2) {
      if (i === 'MeInteresa') {
        this.acuArea2 += 1;
      }
    }
    for (let i of this.preguntasArea3) {
      if (i === 'MeInteresa') {
        this.acuArea3 += 1;
      }
    }
    for (let i of this.preguntasArea4) {
      if (i === 'MeInteresa') {
        this.acuArea4 += 1;
      }
    }
    for (let i of this.preguntasArea5) {
      if (i === 'MeInteresa') {
        this.acuArea5 += 1;
      }
    }
    const areaFinal = Math.max(this.acuArea1, this.acuArea2, this.acuArea3, this.acuArea4, this.acuArea5);
    if (this.acuArea1 === areaFinal) {
      areaDB = area1;
      this.dataCareers = arteCreatividad;
    }
    if (this.acuArea2 === areaFinal) {
      areaDB = area2;
      this.dataCareers = cienciasSociales;
    }
    if (this.acuArea3 === areaFinal) {
      areaDB = area3;
      this.dataCareers = economiaAdministracion;
    }
    if (this.acuArea4 === areaFinal) {
      areaDB = area4;
      this.dataCareers = cienciaTecnologia;
    }
    if (this.acuArea5 === areaFinal) {
      areaDB = area5;
      this.dataCareers = cienciasEcologicas;
    }
    const qUniversity = {
      q: areaDB
    };

    await this.universitiesService.getUniversityes(qUniversity).subscribe((r) => {
      this.dataDB = r;
      this.resultData.push(this.dataDB.data);
      this.resultData.push(areaDB);
      this.resultData.push(this.dataCareers);
      localStorage.setItem(`datosTest`, JSON.stringify(this.resultData));
      this.navCtrl.navigateForward(`/result-university/${JSON.stringify(this.resultData)}`);
    });

  }
  async ngOnInit() {
    await this.questionsService.getQuestions().subscribe((r) => {
      this.data = r.data;
    });
  }

}
