import e137Questions from "./exams/ad0-e137.json";
import e117Questions from "./exams/ad0-e117.json";
import e121Questions from "./exams/ad0-e121.json";
import e129Questions from "./exams/ad0-e129.json";
import e605Questions from "./exams/ad0-e605.json";

export type RawQuestion = {
  id: number;
  question: string;
  answers: string[];
  correct: string | string[];
  reason: string;
};

type RawQuestionBank = RawQuestion[] | { questions: RawQuestion[] };

export type Exam = {
  slug: string;
  code: string;
  title: string;
  level: string;
  tags: string[];
  audience: string;
  description: string;
  accentClass: string;
  sampleSize: number;
  questionBank: RawQuestion[];
  questionCount: number;
};

const createExam = (
  exam: Omit<Exam, "questionBank" | "questionCount">,
  questionBank: RawQuestionBank,
): Exam => ({
  ...exam,
  questionBank: Array.isArray(questionBank) ? questionBank : questionBank.questions,
  questionCount: Array.isArray(questionBank) ? questionBank.length : questionBank.questions.length,
});

export const exams: Exam[] = [
  createExam(
    {
      slug: "ad0-e137",
      code: "AD0-E137",
      title: "Adobe Experience Manager Developer Professional",
      level: "Developer",
      tags: ["Developer", "AEM", "Sites", "Dispatcher", "Cloud Service"],
      audience: "AEM developers working with Sites, Dispatcher and Cloud Service",
      description:
        "Banco principal ya cargado. Puedes repasar pregunta a pregunta o lanzar un test aleatorio.",
      accentClass:
        "from-emerald-500/20 via-emerald-400/10 to-cyan-400/10 border-emerald-400/30",
      sampleSize: 50,
    },
    e137Questions as RawQuestionBank,
  ),
  createExam(
    {
      slug: "ad0-e117",
      code: "AD0-E117",
      title: "Adobe Experience Manager Sites Architect Master",
      level: "Architect",
      tags: ["Architect", "AEM", "Sites", "Enterprise"],
      audience: "Architects designing enterprise AEM Sites solutions",
      description:
        "Estructura lista para cargar el banco de preguntas y reutilizar los mismos modos de estudio.",
      accentClass:
        "from-sky-500/20 via-cyan-400/10 to-blue-400/10 border-sky-400/30",
      sampleSize: 50,
    },
    e117Questions as RawQuestionBank,
  ),
  createExam(
    {
      slug: "ad0-e129",
      code: "AD0-E129",
      title: "Adobe Experience Manager Assets Developer Professional",
      level: "Developer",
      tags: ["Developer", "AEM", "Assets", "Metadata"],
      audience: "Developers focused on AEM Assets, metadata and processing flows",
      description:
        "Ruta preparada para estudiar el examen en cuanto se cargue su banco real.",
      accentClass:
        "from-amber-500/20 via-orange-400/10 to-yellow-400/10 border-amber-400/30",
      sampleSize: 50,
    },
    e129Questions as RawQuestionBank,
  ),
  createExam(
    {
      slug: "ad0-e121",
      code: "AD0-E121",
      title: "Adobe Experience Manager Sites Business Practitioner Expert",
      level: "Business",
      tags: ["Business", "AEM", "Sites", "Authoring"],
      audience: "Business practitioners focused on Sites authoring and solution usage",
      description:
        "Pagina y modos listos para mantener una experiencia consistente entre certificados.",
      accentClass:
        "from-rose-500/20 via-fuchsia-400/10 to-pink-400/10 border-rose-400/30",
      sampleSize: 50,
    },
    e121Questions as RawQuestionBank,
  ),
  createExam(
    {
      slug: "ad0-605",
      code: "AD0-605",
      title: "Adobe Real-Time Customer Data Platform Developer Expert",
      level: "Developer",
      tags: ["Developer", "CDP", "AEP", "Audience", "Data"],
      audience: "Developers responsible for implementing and managing Adobe Real-Time CDP solutions",
      description:
        "Pagina y modos listos para mantener una experiencia consistente entre certificados.",
      accentClass:
        "from-indigo-500/20 via-purple-400/10 to-violet-400/10 border-indigo-400/30",
      sampleSize: 68,
    },
    e605Questions as RawQuestionBank,
  ),
];
