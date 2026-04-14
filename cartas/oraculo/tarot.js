// tarot.js — Significados oraculares do Bestiário Gothicus brasiliensis
// Linguagem: Jodorowsky — direta, centrada no ser, quatro centros
// Cada criatura: upright, reversed, quatro centros (intelecto, coração, criativo, material)

const tarot = {

  "Alamoa": {
    keywords: ["sedução", "ilusão", "desejo", "transformação"],
    upright: {
      theme: "A forma que o vazio toma",
      message: "Você está seguindo uma forma. Examine: é desejo real ou é o vazio tomando a aparência de desejo. A Alamoa não mente — você é que não perguntou o que ela é.",
      advice: "Pare de perseguir. Fique parado e veja o que chega até você. O que se transforma em horror era horror desde o início."
    },
    reversed: {
      theme: "O espelho quebrado",
      message: "Você está fugindo de algo que já te alcançou. A transformação que temia já começou — não na Alamoa, em você.",
      advice: "Nomeie o que mudou. A fuga do horror é o horror. Quando para de correr, o que vê?"
    },
    centros: {
      intelecto: "Sua mente fabrica a beleza que quer ver. Examine a construção, não a criatura.",
      coracao: "O coração está perseguindo uma imagem. Pergunte: o que você sentiria se ela desaparecesse agora?",
      criativo: "A energia criativa está presa na sedução. Ela não produz — apenas atrai e repele.",
      material: "No corpo: o que você chama de desejo pode ser fome de outra coisa. Coma o que realmente precisa."
    }
  },

  "Ana Jansen": {
    keywords: ["karma", "maldição", "poder", "expiação"],
    upright: {
      theme: "A carruagem que você mesmo construiu",
      message: "O que move sua carruagem não é a sua vontade — é o peso do que fez. A maldição não vem de fora. Você é o cocheiro sem cabeça.",
      advice: "Examine o que construiu com crueldade. A carruagem não para porque você não deu o sinal de parada."
    },
    reversed: {
      theme: "O cemitério como ponto de partida",
      message: "A carruagem saiu do cemitério — o ciclo foi interrompido. Mas a interrupção não é liberdade. É apenas uma pausa.",
      advice: "Use a pausa. O que vai fazer diferente antes que a carruagem retome o percurso?"
    },
    centros: {
      intelecto: "Sua mente continua o ciclo automaticamente. Ela não sabe mais parar — só girar.",
      coracao: "O coração está anestesiado pela repetição. Sente, mas não processa. O grito já não assusta.",
      criativo: "A energia criativa foi sequestrada pela maldição. Tudo que cria se transforma em mais do mesmo.",
      material: "No corpo: você carrega um peso que não é seu. Identifique o que herdou e o que escolheu."
    }
  },

  "Anhangá": {
    keywords: ["proteção", "aviso", "limite", "predatório"],
    upright: {
      theme: "O olho de fogo antes da consequência",
      message: "O veado apareceu. Isso significa que você está tomando mais do que precisa — e que ainda há tempo. O Anhangá não ataca sem avisar.",
      advice: "O que você está caçando que não deveria? Examine a necessidade real. A crueldade tem custo — e o aviso já foi dado."
    },
    reversed: {
      theme: "O aviso ignorado",
      message: "O veado apareceu e você não parou. Agora os olhos de fogo estão próximos demais para ser aviso.",
      advice: "Pare agora. Não para salvar o que já perdeu — para não perder o que ainda tem."
    },
    centros: {
      intelecto: "Sua mente racionalizou a predação como necessidade. Examine o argumento que construiu para continuar.",
      coracao: "O coração sente o desequilíbrio mas cede à vontade. Ele sabe o que é crueldade — você é que ignora.",
      criativo: "A energia criativa está sendo usada para justificar o consumo, não para criar.",
      material: "No corpo: o que você consome além do necessário? Alimento, energia, atenção dos outros?"
    }
  },

  "Bebê Diabo": {
    keywords: ["ruptura", "profecia", "caos", "verdade inconveniente"],
    upright: {
      theme: "O monstruoso que é lúcido",
      message: "Algo nasceu que perturba — não porque seja falso, mas porque é verdadeiro. O Bebê Diabo fala o que todos sabem e ninguém diz.",
      advice: "Não desmonte o que te perturba porque perturba. Escute a mensagem antes de expulsar o mensageiro."
    },
    reversed: {
      theme: "O mensageiro expulso",
      message: "A verdade foi descartada com o monstro. Agora o caos age sem aviso — e você perdeu o mapa.",
      advice: "O que foi descartado como absurdo? Volte a ele. O motorista desmaiou porque não acreditou no que viu."
    },
    centros: {
      intelecto: "Sua mente expulsou a informação que não cabia no sistema. O sistema está errado — não a informação.",
      coracao: "O coração sentiu o susto e fechou. O susto era o sinal, não o perigo.",
      criativo: "A energia criativa está bloqueada pelo medo da ruptura. O caos que teme é o caos que cria.",
      material: "No corpo: o que te perturbou fisicamente recentemente? O corpo recebeu a mensagem antes da mente."
    }
  },

  "Boitatá": {
    keywords: ["proteção", "fogo", "floresta", "cegueira"],
    upright: {
      theme: "O fogo que guarda — e que cega",
      message: "Há uma força em movimento. Ela protege o que você protege — e pune o que você destrói. Mas o Boitatá também cega quem olha diretamente.",
      advice: "O que você está destruindo sem perceber? E o que está protegendo com excesso de fogo?"
    },
    reversed: {
      theme: "Cego pela própria proteção",
      message: "Você encarou o que não deveria. Ou usou o fogo para destruir o que era para guardar.",
      advice: "Recue dos olhos da serpente. A intensidade que você usa para proteger está queimando o que ama."
    },
    centros: {
      intelecto: "Sua mente usa a ideia de proteção para justificar o controle. Examine a diferença entre guardar e dominar.",
      coracao: "O coração está em chamas — literalmente. O que sente é intenso demais para ser processado. Baixe o fogo.",
      criativo: "A energia criativa está sendo consumida pelo fogo antes de se transformar em obra.",
      material: "No corpo: onde sente calor excessivo? O fogo que não circula queima por dentro."
    }
  },

  "Boto": {
    keywords: ["sedução", "encantamento", "desaparecimento", "mistério"],
    upright: {
      theme: "O chapéu que nunca sai",
      message: "Algo ou alguém encanta — mas há um orifício escondido sob o chapéu. O Boto não mente sobre o que é. Você é que não perguntou.",
      advice: "Antes de seguir, pergunte o que está escondido. O encantamento é real. O que se esconde também."
    },
    reversed: {
      theme: "O rio não devolve",
      message: "O Boto foi embora. O que ficou — a gravidez, a consequência, o rastro — é real e é seu. O rio não devolve o que levou.",
      advice: "Assuma o que nasceu desse encontro. Não culpe o Boto — você sabia do chapéu."
    },
    centros: {
      intelecto: "Sua mente está fascinada pela narrativa do encantador. Ela perdeu a função crítica. Recupere-a.",
      coracao: "O coração está aberto demais — tão aberto que não filtra. O que entrou foi real, mas também o que saiu.",
      criativo: "A energia criativa foi seduzida por uma forma externa. O que você criaria sem o Boto presente?",
      material: "No corpo: o que gerou nesse encontro que não esperava? O corpo registrou o que a mente romantizou."
    }
  },

  "Bradador": {
    keywords: ["terror invisível", "ansiedade", "o inominável", "pânico"],
    upright: {
      theme: "Puro som, puro terror",
      message: "O que amedronta não tem forma. Isso não significa que não existe — significa que você ainda não encontrou o ângulo para vê-lo. O Bradador não foi visto por quem sobreviveu.",
      advice: "Nomeie o terror. Não para controlá-lo — para dialogar com ele. O que não tem nome tem poder ilimitado."
    },
    reversed: {
      theme: "O silêncio depois do grito",
      message: "O Bradador parou. Não porque foi vencido — porque passou. O terror que não tem forma também não tem permanência.",
      advice: "Respire. Use esse silêncio para entender o que o medo estava protegendo em você."
    },
    centros: {
      intelecto: "Sua mente amplifica o que não entende. O terror cresce na ausência de forma — dê uma forma provisória para trabalhar.",
      coracao: "O coração está em estado de alarme contínuo. O alarme contínuo não protege — esgota.",
      criativo: "A energia criativa está paralisada pelo medo do invisível. O invisível pode ser matéria-prima.",
      material: "No corpo: onde o terror se instala? Garganta, peito, barriga? O corpo localiza o que a mente não vê."
    }
  },

  "Branca-Flor": {
    keywords: ["transformação", "fuga", "amor", "esquecimento"],
    upright: {
      theme: "A fuga que exige tudo",
      message: "O caminho existe — mas exige partir os próprios ossos para construir a escada. Cinzas, sabão, agulhas: cada obstáculo que você cria compra tempo. Use o tempo.",
      advice: "Fuja com inteligência. Mas lembre de quem te salvou. O dedo esquecido muda tudo."
    },
    reversed: {
      theme: "O dedo que ficou",
      message: "Algo essencial foi esquecido — uma promessa, uma pessoa, uma parte de si. O feitiço não está completo. A incompletude é o próximo problema.",
      advice: "O que foi esquecido no ato de fugir? Volte — não ao perigo, ao que deixou para trás."
    },
    centros: {
      intelecto: "Sua mente está em modo de fuga criativa. Boa — mas examine se não está fugindo do que precisa enfrentar.",
      coracao: "O coração está dividido entre o amor que salva e o amor que esqueceu. Os dois são reais.",
      criativo: "A energia criativa está transformando o que devia destruir em obstáculos para o perseguidor. Use isso.",
      material: "No corpo: o que você sacrificou materialmente para escapar? O corpo paga o preço da fuga."
    }
  },

  "Caboclo-d'Água": {
    keywords: ["aliança", "território", "reciprocidade", "rio"],
    upright: {
      theme: "O dono do território que você ocupa",
      message: "Você está num território que tem dono. Não um dono visível — um dono energético. Para avançar, precisa de aliança, não de conquista.",
      advice: "Faça a oferenda antes de lançar a rede. O Caboclo-d'Água não perdoa quem pesca sem pedir licença."
    },
    reversed: {
      theme: "O rio contra você",
      message: "A canoa virou porque você não pediu licença. A antipatia do Caboclo-d'Água é grave — e não tem prazo para acabar.",
      advice: "Recue. Ofereça antes de tentar novamente. O rio tem memória mais longa do que a sua."
    },
    centros: {
      intelecto: "Sua mente não reconhece autoridades que não vê. Isso é arrogância intelectual — e tem custo real.",
      coracao: "O coração sabe que há algo maior no território. Não ignore essa percepção.",
      criativo: "A energia criativa precisa de permissão do lugar onde atua. Arte sem enraizamento é parasitismo.",
      material: "No corpo: você está tomando mais do ambiente do que devolve? O desequilíbrio material tem origem aqui."
    }
  },

  "Caipora": {
    keywords: ["generosidade", "floresta", "magia", "ganância"],
    upright: {
      theme: "A diferença entre dar e trocar",
      message: "O Caipora transforma carvão em ouro para quem dá sem calcular. A mesma criatura vira pelo avesso quem se aproxima com cobiça disfarçada de necessidade.",
      advice: "Examine sua intenção antes de oferecer. O Caipora não é enganado. A floresta lê o que está por baixo do gesto."
    },
    reversed: {
      theme: "Virado pelo avesso",
      message: "A ganância foi reconhecida. O carvão permaneceu carvão — ou pior. A floresta não pune por crueldade: ela apenas revela o que já era verdadeiro.",
      advice: "O que você chamou de necessidade era ganância? Examine honestamente. A punição é o espelho."
    },
    centros: {
      intelecto: "Sua mente construiu um argumento para justificar o que quer como necessidade. Desmonte o argumento.",
      coracao: "O coração sabe a diferença entre generosidade real e troca disfarçada. Escute-o antes de agir.",
      criativo: "A energia criativa floresce quando não está a serviço do acúmulo. O que criaria se não precisasse de retorno?",
      material: "No corpo: o que você está acumulando além do necessário? O corpo carrega o excesso como peso."
    }
  },

  "Capelobo": {
    keywords: ["traição", "confiança", "consumo", "predação"],
    upright: {
      theme: "O abraço que abre o crânio",
      message: "Há alguém bem-vestido na sua vida que ganhou sua confiança antes de mostrar o focinho de tamanduá. O Capelobo não ataca sem antes ser aceito.",
      advice: "Observe quem está se aproximando com muita simpatia. O umbigo é o ponto fraco — mas só funciona se você reconhecer a criatura a tempo."
    },
    reversed: {
      theme: "O focinho reconhecido",
      message: "Você percebeu o focinho sob o terno. O abraço não aconteceu. A confiança não foi dada.",
      advice: "Confie no instinto que sussurrou 'não'. Era correto. O que quase abraçou era o Capelobo."
    },
    centros: {
      intelecto: "Sua mente foi convencida pela aparência de competência. A inteligência do Capelobo é real — e predatória.",
      coracao: "O coração sentiu o desconforto mas cedeu à simpatia. O desconforto era a informação correta.",
      criativo: "A energia criativa está sendo drenada por alguém que se alimenta dela. Identifique quem suga sem criar.",
      material: "No corpo: sente que algo foi retirado de você sem consentimento? O Capelobo age no físico também."
    }
  },

  "Cazumbá": {
    keywords: ["ritual", "ressurreição", "limiar", "sagrado e cômico"],
    upright: {
      theme: "O intermediário que o ritual exige",
      message: "Há algo morto que pode reviver — mas não sozinho. O Cazumbá é convocado para a travessia. Sem os seres do limiar, o boi não ressuscita.",
      advice: "Chame quem habita o entre. A ressurreição que você precisa não é feita por você — é feita através de você, com os intermediários certos."
    },
    reversed: {
      theme: "O ritual sem os cazumbás",
      message: "O boi não reviveu. O ritual foi feito — mas sem os seres do limiar. Algo essencial foi omitido.",
      advice: "O que foi esquecido no ritual? O invisível que não foi honrado está impedindo a passagem."
    },
    centros: {
      intelecto: "Sua mente não aceita intermediários — quer fazer diretamente. Mas alguns processos exigem o que ela não compreende.",
      coracao: "O coração está no terreiro — sente o sagrado. Mas precisa também do cômico para não endurecer.",
      criativo: "A energia criativa está no limiar entre o grotesco e o belo. O Cazumbá usa máscara — use a sua.",
      material: "No corpo: o que precisa ser ressuscitado no plano físico? Saúde, hábito, relação com o corpo?"
    }
  },

  "Chibamba": {
    keywords: ["silêncio", "trauma", "história esquecida", "acalanto"],
    upright: {
      theme: "O terror com nome e história",
      message: "O Chibamba foi negro velho, foi tronco de tanto apanhar. O que assusta tem raiz histórica. O medo que sente não nasceu em você.",
      advice: "Olhe para trás do terror. Quem o criou? Para quê? O que silencia tem nome — e nome é poder."
    },
    reversed: {
      theme: "Folhas de bananeira apenas",
      message: "Você está sendo amedrontado por algo que não tem poder real sobre você. As folhas de bananeira são apenas folhas.",
      advice: "Pare de chorar. O Chibamba só tem poder enquanto você acredita nele. O que seria diferente se não acreditasse?"
    },
    centros: {
      intelecto: "Sua mente herdou categorias de medo que não examinou. De onde vêm essas categorias?",
      coracao: "O coração carrega medos ancestrais. Eles não são seus — mas estão em você. Diferencie.",
      criativo: "A energia criativa está bloqueada pelo terror herdado. O que criaria sem esse peso?",
      material: "No corpo: onde o terror ancestral se instala? Que postura você assume quando sente esse medo específico?"
    }
  }

,

  "Cobra-Grande": {
    keywords: ["mistério", "curiosidade fatal", "cosmos", "segredo"],
    upright: {
      theme: "O coco que não deve ser aberto",
      message: "Há algo guardado por razão. A noite dentro do coco de tucumã não é para ser liberada agora — é para ser carregada até o destino. A curiosidade que não resiste transforma quem cede.",
      advice: "O que você está prestes a abrir sem ter permissão? Existe razão para o lacre. Respeite antes de examinar."
    },
    reversed: {
      theme: "A noite solta",
      message: "O coco foi aberto. A noite se espalhou. Os mensageiros viraram macacos de boca preta. O que foi liberado não volta.",
      advice: "Aprenda a habitar a escuridão que você mesmo soltou. Não há retorno — há adaptação."
    },
    centros: {
      intelecto: "Sua mente quer saber antes da hora. O conhecimento prematuro tem custo — examine se está preparado para o que vai encontrar.",
      coracao: "O coração sente o peso do segredo. Carregar sem abrir é uma forma de amor. Você consegue?",
      criativo: "A energia criativa está represada pelo segredo. A contenção tem potência — use-a antes de liberar.",
      material: "No corpo: o que você está segurando fisicamente que precisa ser carregado até o destino antes de soltar?"
    }
  },

  "Comadre Fulozinha": {
    keywords: ["proteção da natureza", "punição", "oferenda", "infância"],
    upright: {
      theme: "O nó nas crinas",
      message: "Algo que você maltratou — um espaço, um ser, uma criança — está fazendo nós no seu caminho. A Comadre Fulozinha não pune sem razão. O nó é proporcional ao dano.",
      advice: "Ofereça antes de exigir desbloqueio. Mingau, mel, doces — o que o lugar que você maltratou precisa para confiar novamente?"
    },
    reversed: {
      theme: "O chicote de cipó",
      message: "O nó se apertou demais. O chicote já caiu. Você foi posto no telhado — metaforicamente ou literalmente.",
      advice: "Reconheça o erro. Não tente negociar com o castigo — primeiro aceite-o, depois ofereça reparação."
    },
    centros: {
      intelecto: "Sua mente não registrou o dano que causou. Revise os últimos meses — o que passou despercebido que foi real para outro?",
      coracao: "O coração confundiu proteção com possessividade. A Comadre Fulozinha protege — não domina. Qual é a sua versão?",
      criativo: "A energia criativa está bloqueada pelo que ainda não reparou. A obra não avança porque a dívida não foi paga.",
      material: "No corpo: o que seu ambiente físico precisa que você ainda não deu? Casa, terra, planta, animal?"
    }
  },

  "Come-Língua": {
    keywords: ["mentira", "palavra", "consequência", "busca"],
    upright: {
      theme: "A língua que cai de tanta mentira",
      message: "O que você disse criou a situação atual. Não como metáfora — como causalidade direta. A língua do Come-Língua caiu porque ele acreditou que palavras não custam nada.",
      advice: "Examine o que disse recentemente que não era verdadeiro. A busca por uma língua que sirva é o sintoma — a causa está no que foi dito."
    },
    reversed: {
      theme: "A língua que procura e não encontra",
      message: "Você está usando palavras alheias — frases que não são suas, discursos emprestados. Nenhuma serve porque nenhuma é sua.",
      advice: "Pare de tentar encaixar línguas que não pertencem à sua boca. A sua língua está disponível — se parar de mentir."
    },
    centros: {
      intelecto: "Sua mente fabrica argumentos que sua boca reproduz sem questionar. Quem está pensando por você?",
      coracao: "O coração sente a discrepância entre o que diz e o que sente. Essa discrepância tem nome: desonestidade afetiva.",
      criativo: "A energia criativa está bloqueada pela palavra falsa. Obra que nasce de mentira não tem vida.",
      material: "No corpo: sente algo na garganta, na boca, na língua? O corpo localiza o que a mente evita."
    }
  },

  "Corpo-Seco": {
    keywords: ["rejeição", "limbo", "crueldade", "entre mundos"],
    upright: {
      theme: "Rejeitado por Deus, pelo Diabo e pela terra",
      message: "Você está num estado que nenhum sistema aceita. Não é morte, não é vida. Não é dentro, não é fora. O Corpo-Seco chegou aqui por crueldade em vida — examine a sua.",
      advice: "Qual crueldade sistemática você praticou que fecha todas as portas? O limbo não é aleatório."
    },
    reversed: {
      theme: "A caverna que tem saída",
      message: "A Serra do Corpo Seco tem uma caverna — e a caverna tem saída. O que parecia eterno está terminando. Uma terra finalmente aceita.",
      advice: "Deixe-se ser enterrado. O descanso é possível. O limbo não precisa ser permanente."
    },
    centros: {
      intelecto: "Sua mente está presa entre sistemas de pensamento incompatíveis. Escolha um — mesmo imperfeito — ou continue vagando.",
      coracao: "O coração foi endurecido pela crueldade que praticou. Não está morto — está mumificado. Há diferença.",
      criativo: "A energia criativa está suspensa — nem flui nem pára. Esse é o sinal mais claro do limbo.",
      material: "No corpo: onde sente esse estado de suspensão? Que parte do corpo parece não pertencer a você?"
    }
  },

  "Crispim": {
    keywords: ["matricídio simbólico", "maldição", "fome", "rio"],
    upright: {
      theme: "A cabeça que cresceu porque o coração encolheu",
      message: "Algo que você destruiu — uma origem, uma confiança, uma nutrição fundamental — retornou como fome insaciável. A cabeça do Crispim cresceu em proporção ao que foi destruído.",
      advice: "O que você matou que te alimentava? A fome que sente não tem objeto externo — tem origem interna."
    },
    reversed: {
      theme: "Nossa Senhora na embarcação",
      message: "Há uma proteção funcionando que você não reconhece. A maldição não conseguiu virar o barco — algo ou alguém está segurando.",
      advice: "Reconheça o que te protege. Ingratidão pela proteção é o próximo passo para a maldição."
    },
    centros: {
      intelecto: "Sua mente alimenta a cabeça-enorme às custas do coração. O desequilíbrio entre os centros é a doença.",
      coracao: "O coração foi a vítima da maldição — destruído pelo que deveria nutrir. Onde está agora?",
      criativo: "A energia criativa está sendo drenada pela fome. Nada se cria quando tudo é consumido pela necessidade.",
      material: "No corpo: que fome específica sente que nenhum alimento satisfaz? Essa é a pergunta central."
    }
  },

  "Cumacanga": {
    keywords: ["dupla natureza", "segredo", "transformação noturna", "herança"],
    upright: {
      theme: "A cabeça que voa separada do corpo",
      message: "Há uma divisão real em você — o que é de dia e o que é de noite não se conhecem. A cabeça parte, o corpo fica. Isso não é metáfora: são dois estados que não dialogam.",
      advice: "O que você faz de noite que o seu eu de dia não sabe? E o contrário? A integração é o trabalho."
    },
    reversed: {
      theme: "O retorno antes do primeiro galo",
      message: "A parte que voou voltou a tempo — desta vez. Mas a divisão estrutural permanece. Você continua sendo sétima filha.",
      advice: "A cura exige enfrentar a origem, não apenas os sintomas. O que na sua linhagem criou essa cisão?"
    },
    centros: {
      intelecto: "Sua mente é a cabeça que voa — desconectada do corpo que fica. Traga-a de volta antes do primeiro galo.",
      coracao: "O coração está no corpo que permanece — imóvel, esperando o retorno. Ele está esgotado de esperar.",
      criativo: "A energia criativa está dividida entre os dois estados. O que criaria se os dois se encontrassem?",
      material: "No corpo: que parte de você parece separada do restante? O corpo mapeia a divisão fisicamente."
    }
  },

  "Curupira": {
    keywords: ["inversão", "engano", "proteção", "território"],
    upright: {
      theme: "As pegadas que vão na direção errada",
      message: "O caminho óbvio é uma armadilha. O Curupira inverte as pegadas — não para confundir o inocente, mas para proteger o que é sagrado do que predaz.",
      advice: "Questione a direção que parece certa. Às vezes o caminho inverso é o caminho. E às vezes você é o caçador que está sendo enganado."
    },
    reversed: {
      theme: "Completamente desorientado",
      message: "As pegadas invertidas funcionaram demais. Você não sabe mais onde está, de onde veio, para onde vai. O Curupira protegeu a floresta — de você.",
      advice: "Pare. Ofereça fumo sem ganância. Peça orientação ao dono do território antes de dar mais um passo."
    },
    centros: {
      intelecto: "Sua mente está seguindo uma lógica invertida sem saber. Revise as premissas do seu raciocínio.",
      coracao: "O coração está confuso entre o que deseja e o que a floresta permite. O desejo sem permissão é predação.",
      criativo: "A energia criativa está no engano criativo do Curupira — use a inversão como ferramenta, não como armadilha.",
      material: "No corpo: qual direção seu instinto físico indica? Oposta à que sua mente escolheu? Considere."
    }
  },

  "Diabo": {
    keywords: ["criação imperfeita", "tentação", "contrato", "esperteza"],
    upright: {
      theme: "O sapo que saiu quando queria borboleta",
      message: "Você está tentando criar algo grandioso — e saem sapos. O Diabo também é criador: tenta imitar e produz algo diferente do que planejou. Isso não é fracasso — é o início do aprendizado.",
      advice: "Examine o que criou. Sapo ou borboleta? Taturana ou lavandisca? O resultado revela a intenção real."
    },
    reversed: {
      theme: "São José levou a alma",
      message: "A esperteza funcionou. O Diabo perdeu essa. A tentação foi reconhecida e não cedeu.",
      advice: "Use a esperteza, não a crueldade. O Diabo só ganha de quem deixa de prestar atenção."
    },
    centros: {
      intelecto: "Sua mente está a serviço da tentação — construindo justificativas elegantes para o que não deveria fazer.",
      coracao: "O coração sente o contrato que está prestes a assinar. Leia as cláusulas antes de fechar.",
      criativo: "A energia criativa está sendo usada para imitar em vez de criar. O que criaria se não estivesse tentando impressionar?",
      material: "No corpo: qual parte de você fez um acordo que seu espírito não conhece? O corpo guarda os contratos."
    }
  },

  "Dom Sebastião": {
    keywords: ["retorno", "mito", "espera", "encantamento"],
    upright: {
      theme: "O touro preto com estrela na testa",
      message: "Algo que parecia definitivamente perdido está encantado — não morto. O touro pasta sob a ilha. Há um momento certo: junho, agosto, sextas-feiras. Mas exige coragem de cravar o punhal.",
      advice: "O que você perdeu pode estar apenas encantado. A pergunta não é 'onde foi' — é 'você tem coragem de quebrar o feitiço'?"
    },
    reversed: {
      theme: "O punhal que não foi cravado",
      message: "O momento passou e o punhal ficou na bainha. O touro continua encantado. A oportunidade de transformação foi perdida por falta de coragem.",
      advice: "Haverá outro junho, outro agosto, outra sexta-feira. Prepare o punhal para quando o touro aparecer."
    },
    centros: {
      intelecto: "Sua mente sabe onde está a estrela na testa do touro. O que falta não é conhecimento — é coragem de agir.",
      coracao: "O coração está esperando o retorno de algo. Examine se o que espera é possível ou é nostalgia.",
      criativo: "A energia criativa está suspensa num mito pessoal de retorno. Crie com o que tem agora — não com o que pode voltar.",
      material: "No corpo: o que na sua estrutura material está encantado — suspenso, nem morto nem vivo?"
    }
  },

  "Galega do Cemitério": {
    keywords: ["sedução póstuma", "passado amoroso", "limiar", "encantamento"],
    upright: {
      theme: "A beleza que vem do túmulo",
      message: "Algo morto ainda exerce fascínio real sobre você. Um amor, um projeto, uma identidade — que deveriam estar enterrados ainda embarcam no seu ônibus, ainda dançam a noite toda.",
      advice: "Deixe entrar no cemitério. Não vá junto até a sepultura. A beleza do que foi é real — o erro é seguir para dentro."
    },
    reversed: {
      theme: "A caveira revelada",
      message: "O encantamento quebrou. A Galega mostrou a caveira antes de você entrar na tumba. O susto foi a graça.",
      advice: "Use esse susto para escolher o que é vivo e o que é morto na sua vida. Faça o inventário agora."
    },
    centros: {
      intelecto: "Sua mente está romantizando o passado. O cemitério que frequenta mentalmente tem um nome — qual é?",
      coracao: "O coração ainda está dançando com quem não existe mais. O que impede o luto real?",
      criativo: "A energia criativa está sendo alimentada por um morto-vivo. O que criaria se parasse de voltar ao cemitério?",
      material: "No corpo: o que ainda carrega fisicamente de algo que terminou? Objeto, hábito, postura?"
    }
  },

  "Homem-Estrela": {
    keywords: ["aparência", "bondade", "dádiva", "julgamento"],
    upright: {
      theme: "O velho corcunda que traz o fogo",
      message: "O que chegou não parece valioso. O velhinho de olhos morteiros traz o fogo, a mandioca, todas as plantas — para quem tem bom coração. A soberba não o reconhece.",
      advice: "O que você recusou por aparência recentemente? Volte a examinar. O dom que dispensou pode ser o que mais precisava."
    },
    reversed: {
      theme: "A moça vaidosa não recebeu o fogo",
      message: "A vaidade afastou o dom. A moça que queria o Homem-Estrela depois de vê-lo jovem não recebeu nada — e virou urutau.",
      advice: "O Homem-Estrela já passou. Haverá outro — mas não se você continuar julgando pela forma."
    },
    centros: {
      intelecto: "Sua mente classifica pelo que vê. Essa classificação te faz perder o que não cabe na categoria.",
      coracao: "O coração de bom coração reconhece o Homem-Estrela. O seu está reconhecendo — ou julgando?",
      criativo: "A energia criativa está bloqueada pela ideia do que o dom deveria parecer. O dom real não tem essa forma.",
      material: "No corpo: qual sensação física você teve ao recusar algo que depois desejou? Reconheça esse sinal."
    }
  },

  "Ipupiara": {
    keywords: ["consumo", "profundeza", "medo primordial", "origem"],
    upright: {
      theme: "O mais antigo dos medos",
      message: "Há algo nas profundezas que devora — e começa pelos sentidos. Olhos, nariz, dedos: o Ipupiara remove a percepção antes de tomar o corpo. O medo que sente é o mais antigo de todos.",
      advice: "Não pesque sozinho em águas profundas à noite. Reconheça quando o ambiente exige companhia. Alguns medos existem para isso."
    },
    reversed: {
      theme: "Emergindo do abraço",
      message: "Você sobreviveu. O monstro primordial não completou o festim. O que foi consumido não volta — mas o que ficou é suficiente.",
      advice: "Inventarie o que sobrou. Não lamente o que o Ipupiara levou — construa com o que permaneceu."
    },
    centros: {
      intelecto: "Sua mente está nas profundezas — onde a luz não chega. Suba para onde pode ver antes de analisar.",
      coracao: "O coração foi o primeiro a ser devorado. Está começando a regenerar? O processo é lento.",
      criativo: "A energia criativa foi consumida pelo medo primordial. Antes de criar, é preciso emergir.",
      material: "No corpo: que parte de você foi mais afetada pela última crise profunda? Começa a recuperação por ali."
    }
  },

  "Jabuti": {
    keywords: ["paciência", "vingança", "tempo", "inteligência"],
    upright: {
      theme: "Cem anos para esperar",
      message: "Não é o momento de agir. O Jabuti tem cem anos de vida — e usa todos eles. A anta e a onça são maiores, mais rápidas, mais fortes. E ainda assim perderam.",
      advice: "Espere. Use a inteligência que tem. Não tente ser o que não é — seja o que é com maestria."
    },
    reversed: {
      theme: "O jabuti que tentou ser onça",
      message: "Você usou força. O Jabuti que tenta pela força volta ao início. A tentativa de usar o que não tem é o único erro que comete.",
      advice: "Reconheça o limite real. A paciência não é fraqueza — é a única arma que você tem e que ninguém pode tirar."
    },
    centros: {
      intelecto: "Sua mente está calculando a vitória pela força alheia. Calcule pela sua — lenta, segura, inevitável.",
      coracao: "O coração quer a vindita agora. Mas a vingança do Jabuti que tarda é a única que garante resultado.",
      criativo: "A energia criativa está na paciência da carapaça. O que você está construindo que só revelará seu valor no tempo?",
      material: "No corpo: onde está sua resistência física mais confiável? Construa a partir daí — não do que é mais fraco."
    }
  },

  "Jaci Jaterê": {
    keywords: ["infância", "tesouro escondido", "sono", "limiar"],
    upright: {
      theme: "Ver antes de ser visto",
      message: "Há um tesouro próximo — mas a ordem importa. Se você o vir antes que ele te veja, você guia. Se ele te vir primeiro, perdeu o controle da situação.",
      advice: "Preste atenção à ordem dos eventos. O cajado bate no chão antes que você perceba. Durma a sesta — o limiar se abre para quem repousa."
    },
    reversed: {
      theme: "Visto antes de ver",
      message: "O Jaci Jaterê te viu primeiro. A alma foi conduzida à floresta encantada sem o seu consentimento.",
      advice: "Recupere o que foi levado durante o sono. O processo começa por reconhecer que foi levado."
    },
    centros: {
      intelecto: "Sua mente está acordada quando deveria descansar. O tesouro se revela no estado de repouso — não de análise.",
      coracao: "O coração de criança reconhece o Jaci Jaterê. Reconnecte-se com o que sabia antes de aprender a desconfiar.",
      criativo: "A energia criativa está disponível no estado entre o sono e a vigília. Trabalhe nesse limiar.",
      material: "No corpo: você está dormindo? O sono reparador é condição para o tesouro — não luxo."
    }
  },

  "João Galafuz": {
    keywords: ["aviso", "tempestade", "intuição", "recuo"],
    upright: {
      theme: "A labareda azul entre as ondas",
      message: "O aviso já apareceu — poucos reconheceram. João Galafuz surge antes do naufrágio, não durante. A janela de recuo está aberta agora.",
      advice: "Suspenda o que estava fazendo. Retorne à praia. O aviso que parece superstição é o único que pode salvar."
    },
    reversed: {
      theme: "A labareda ignorada",
      message: "O aviso foi descartado. A tempestade chegou porque o barco saiu mesmo assim.",
      advice: "Tarde demais para recuar — mas não tarde demais para se preparar. O que ainda pode ser protegido?"
    },
    centros: {
      intelecto: "Sua mente não confia no que não pode explicar. João Galafuz não espera explicação — só respeito.",
      coracao: "O coração sentiu a labareda azul antes da mente perceber. Quando foi a última vez que sentiu isso?",
      criativo: "A energia criativa está funcionando como sinal — o desconforto criativo é aviso de tempestade no projeto.",
      material: "No corpo: que sinal físico você ignorou recentemente que agora faz sentido? O corpo é João Galafuz."
    }
  },

  "Jurupari": {
    keywords: ["lei", "segredo sagrado", "sonho", "punição"],
    upright: {
      theme: "O que vem pelos sonhos",
      message: "Há uma lei que você precisa respeitar — mesmo sem entendê-la completamente. Jurupari legisla através do sonho. O que te aflinge à noite carrega uma instrução.",
      advice: "Anote os sonhos. Não os interprete — observe. A lei que vem pelos sonhos precede a compreensão."
    },
    reversed: {
      theme: "Os instrumentos profanados",
      message: "Algo sagrado foi visto por quem não deveria — ou você transgrediu uma lei que não examinou. A punição já foi decretada nos sonhos.",
      advice: "A transgressão tem custo. Busque reparação antes que o sonho se torne pesadelo permanente."
    },
    centros: {
      intelecto: "Sua mente traduz Jurupari como Diabo — o erro dos missionários. Examine o que está mal-traduzindo em sua vida.",
      coracao: "O coração está recebendo mensagens oníricas. Você está acordando e descartando. Pare.",
      criativo: "A energia criativa está nos ritos que você ainda não instituiu. Quais práticas regulares sua obra exige?",
      material: "No corpo: o sono está perturbado? Jurupari fala através da qualidade do descanso."
    }
  },

  "Labatut": {
    keywords: ["terror absoluto", "presença avassaladora", "inevitável", "aviso animal"],
    upright: {
      theme: "A ventania antes do gigante",
      message: "Algo imenso está chegando — maior do que você, maior que suas defesas convencionais. O Labatut se anuncia pelo vento. Os cães latem antes que você perceba.",
      advice: "Feche a porta. Não saia. Quando o ambiente inteiro sinaliza perigo, acredite no ambiente."
    },
    reversed: {
      theme: "O gigante passou",
      message: "A ventania foi embora. Você ficou dentro e sobreviveu. O que parecia inevitável não entrou.",
      advice: "Abra a porta apenas no silêncio. O que passou não precisa ser enfrentado — apenas sobrevivido."
    },
    centros: {
      intelecto: "Sua mente quer entender o Labatut antes de se proteger. Não há tempo para isso — aja primeiro.",
      coracao: "O coração está em pânico — isso é correto. O pânico do Labatut é informação, não fraqueza.",
      criativo: "A energia criativa está suspensa — e deve estar. Há momentos em que sobreviver é a única tarefa.",
      material: "No corpo: o instinto animal está ativo? Quando o corpo quer se esconder, esconda-se."
    }
  },

  "Lobisomem": {
    keywords: ["transformação involuntária", "herança", "ciclo lunar", "maldição"],
    upright: {
      theme: "O que muda com a lua",
      message: "Há um padrão em você que muda com a lua — uma raiva, um comportamento, uma necessidade que não controla totalmente. A primeira transformação foi aos treze anos. Você já sabe disso.",
      advice: "Reconheça o ciclo. Mapeie as luas. O que não é reconhecido não pode ser trabalhado."
    },
    reversed: {
      theme: "A bala de prata",
      message: "A bala de prata existe — e pode ser uma conversa, uma decisão, um ritual. A maldição hereditária tem antídoto.",
      advice: "Encontre sua bala de prata. Ela raramente é o que você imagina. Comece pela pergunta: quem na família transformou?"
    },
    centros: {
      intelecto: "Sua mente explica a transformação — mas explicar não é curar. O que você ainda não fez além de entender?",
      coracao: "O coração é a vítima principal da transformação involuntária. Quem cuida dele nos sete cemitérios?",
      criativo: "A energia criativa está atada ao ciclo lunar — use isso. A transformação tem potência criativa enorme.",
      material: "No corpo: o ciclo mensal ou lunar te afeta fisicamente? O Lobisomem mora no corpo antes da mente."
    }
  },

  "Loira do Banheiro": {
    keywords: ["invocação", "passado não enterrado", "memória", "fechamento"],
    upright: {
      theme: "Maria Augusta ainda não foi enterrada",
      message: "Algo do seu passado não recebeu fechamento — um luto, uma fase, uma identidade. Ainda aparece quando chamado. Três vezes a descarga e ela está lá.",
      advice: "Dê água ao que pede água. Ajude a enterrar o que ainda vaga. O fechamento que você adia tem custo."
    },
    reversed: {
      theme: "Não puxe a descarga",
      message: "Você está prestes a invocar o que está razoavelmente quieto. O passado que não foi chamado não precisa ser chamado agora.",
      advice: "Deixe o que está quieto permanecer quieto. Não toda memória precisa ser evocada para ser processada."
    },
    centros: {
      intelecto: "Sua mente está repetindo o ritual de invocação — voltando ao mesmo pensamento três vezes. Perceba o padrão.",
      coracao: "O coração ainda está no banheiro da escola. O que exige que você volte sempre ao mesmo lugar?",
      criativo: "A energia criativa está presa num loop com o passado. O que criaria se parasse de puxar a descarga?",
      material: "No corpo: que objeto físico ainda invoca o que deveria estar enterrado? Considere o que fazer com ele."
    }
  },

  "Macaco Serafim": {
    keywords: ["troca", "astúcia", "desprendimento", "circularidade"],
    upright: {
      theme: "Do virado à viola",
      message: "Cada troca parece absurda — mas a cadeia tem lógica. Virado por sabão, sabão por saco, saco por viola. O desprendimento não é descuido — é o método.",
      advice: "Solte o que tem. Aceite o que vem. A lógica da troca é mais profunda do que o valor aparente de cada objeto."
    },
    reversed: {
      theme: "A corrente quebrada",
      message: "Você recusou uma troca que parecia injusta — e quebrou a corrente. A viola ficou do outro lado da recusa.",
      advice: "Volte à última troca boa. O que estava disposto a soltar antes de calcular demais?"
    },
    centros: {
      intelecto: "Sua mente calcula o valor de cada troca e paralisa o processo. O Macaco Serafim não calcula — age.",
      coracao: "O coração está no gesto de dar a menina ao cego como guia. Há bondade impulsiva aqui — cultive-a.",
      criativo: "A energia criativa está na cadeia de transformações. Cada obra é uma troca — você está disposto?",
      material: "No corpo: o que pode soltar agora que está segurando por hábito, não por necessidade?"
    }
  },

  "Mãe de Ouro": {
    keywords: ["riqueza oculta", "segredo", "proteção", "revelação"],
    upright: {
      theme: "A cabeleira de fogo no rio",
      message: "Há riqueza onde você não esperava — indicada por uma presença que aparece aos desesperados, não aos satisfeitos. O ouro existe. Mas o segredo deve ser guardado.",
      advice: "Aceite a indicação. Guarde o segredo. O patrão cruel que soube foi soterrado no terceiro dia."
    },
    reversed: {
      theme: "O segredo revelado",
      message: "Alguém falou. A Mãe de Ouro desaparece quando o dom é exposto pela ganância de terceiros — ou pela sua.",
      advice: "O que foi revelado não volta. Mas a Mãe de Ouro reaparece para quem ainda tem desespero honesto — não para quem procura."
    },
    centros: {
      intelecto: "Sua mente quer compartilhar o que descobriu. Por quê? Examine a motivação antes de falar.",
      coracao: "O coração sente a presença da Mãe de Ouro nos momentos de desespero real. Esses momentos são portais.",
      criativo: "A energia criativa está no segredo bem guardado. A obra que não se explica antes de ser feita tem mais potência.",
      material: "No corpo: onde está o ouro que você ainda não reconheceu como seu? Examine sem revelar."
    }
  },

  "Mãe-d'água": {
    keywords: ["fartura", "aliança", "renúncia", "profundidade"],
    upright: {
      theme: "Zão, zão, zão, calunga",
      message: "Uma aliança com o que é profundo traz abundância. A Mãe-d'água casa com o pescador e traz tudo. Mas a aliança exige que você nunca arenegue do que veio das profundezas.",
      advice: "Nunca arenegue de quem te dá. Ela ouve tudo — inclusive o que você diz sobre ela quando não está presente."
    },
    reversed: {
      theme: "O canto que leva tudo",
      message: "O arenegamento aconteceu. A Mãe-d'água cantou. Filhos, gado, casa, plantações — tudo voltou ao rio.",
      advice: "O que foi levado era precioso. Antes de buscar substituição, reconheça o que o arenegamento custou."
    },
    centros: {
      intelecto: "Sua mente arenagou de uma fonte de conhecimento que não entendia. O que perdeu ao fechar essa porta?",
      coracao: "O coração é o pescador — aberto para o que vem das profundezas. O que recusou por parecer estranho demais?",
      criativo: "A energia criativa vem de baixo d'água. Quando para de areneagar das fontes profundas, o que emerge?",
      material: "No corpo: que fonte de sustento você desrespeitou? O corpo lembra o que a mente conveniente esqueceu."
    }
  },

  "Mapinguari": {
    keywords: ["força irresistível", "inevitável", "fedor", "origem pré-histórica"],
    upright: {
      theme: "O que dilata o aço com um sopro",
      message: "Há algo que avança e que não pode ser detido pelas armas convencionais. O Mapinguari dilata o aço. A única estratégia eficaz é não estar no caminho.",
      advice: "Não durma no caminho do gigante. O único recurso não é vencer — é não estar onde ele passa."
    },
    reversed: {
      theme: "O gigante dorme de dia",
      message: "O Mapinguari dorme enquanto há luz. Há uma janela. Aja agora — de noite, quando o que parece invencível está parado.",
      advice: "Use a janela que o ciclo oferece. O que é inevitável durante o dia pode ser contornado nas sombras."
    },
    centros: {
      intelecto: "Sua mente está tentando entender o Mapinguari. Não há tempo — mova o corpo primeiro.",
      coracao: "O coração está paralisado pelo tamanho do que enfrenta. A paralisia é o verdadeiro perigo.",
      criativo: "A energia criativa está suspensa pelo fedor — pela presença avassaladora do que não se pode ignorar.",
      material: "No corpo: onde sente o peso do inevitável? Que parte do corpo carrega essa pressão?"
    }
  },

  "Matinta Perera": {
    keywords: ["herança feminina", "transformação", "palavra fatal", "linhagem"],
    upright: {
      theme: "Quem quer?",
      message: "Há uma herança que se transmite pela palavra. A Matinta pergunta antes de morrer — e quem responde 'eu quero' sem pensar carrega o que não escolheu conscientemente.",
      advice: "Examine o que está aceitando. Cumpra as oferendas. Não responda 'eu quero' a nada sem saber o que está recebendo."
    },
    reversed: {
      theme: "A Matinta procura outra",
      message: "Você não respondeu. A herança pesada foi para outro. Mas examine o que quase aceitou — e por quê estava tão próximo de dizer sim.",
      advice: "O silêncio foi a resposta certa. Agora examine: o que em você queria dizer 'eu quero'?"
    },
    centros: {
      intelecto: "Sua mente está analisando a herança — mas a herança não é intelectual. É corporal, vocal, noturna.",
      coracao: "O coração carrega a linhagem feminina. O que as mulheres da sua família transmitiram que você ainda não examinou?",
      criativo: "A energia criativa está na transformação noturna. O que cria quando ninguém vê é diferente do que cria quando observam?",
      material: "No corpo: que som você faz involuntariamente? A Matinta se revela pelos pios — o corpo tem os seus."
    }
  },

  "Minhocão": {
    keywords: ["subterrâneo", "desmoronamento", "invisível", "erosão"],
    upright: {
      theme: "O que solapa por baixo",
      message: "Há algo subterrâneo que erode — invisível, imenso, soberano pelo pavor. As cidades não desmoronam pelo que ataca — pelo que escava por baixo em silêncio.",
      advice: "Examine o que está sendo escavado por baixo da sua estrutura. O Minhocão não aparece — apenas age."
    },
    reversed: {
      theme: "Preso pelos fios de cabelo",
      message: "O Minhocão está preso sob a Igreja Matriz. O que ameaçava está contido — por algo que parece frágil mas sustenta.",
      advice: "Confie no que contém. O que prende o monstro subterrâneo na sua vida parece frágil — mas funciona."
    },
    centros: {
      intelecto: "Sua mente não detecta o que está abaixo da superfície do pensamento. Que crença fundamental está sendo solapada?",
      coracao: "O coração sente o tremor antes da queda. Quando foi a última vez que sentiu esse tremor?",
      criativo: "A energia criativa está sendo drenada por um processo subterrâneo que você não vê. Onde vai o que não se transforma em obra?",
      material: "No corpo: que estrutura física está cedendo silenciosamente? Dente, coluna, postura — o Minhocão mora no que ignoramos."
    }
  },

  "Moura-Torta": {
    keywords: ["usurpação", "identidade roubada", "verdade", "reconhecimento"],
    upright: {
      theme: "A Moura-Torta está no seu trono",
      message: "Alguém ou algo ocupa um lugar que não é seu — ou o seu lugar foi tomado. O feitiço funciona enquanto ninguém reconta a história verdadeira.",
      advice: "Reconte a história verdadeira. Não para convencer os outros — para você mesmo. É a única forma de desfazer o feitiço."
    },
    reversed: {
      theme: "A pombinha recuperou a forma",
      message: "A história foi recontada. O reconhecimento aconteceu. A Moura-Torta foi desmascarada — por você ou por alguém que te viu.",
      advice: "Permaneça na forma que é genuinamente sua. A Moura-Torta tenta voltar quando você vacila."
    },
    centros: {
      intelecto: "Sua mente adotou uma narrativa que não é sua. Quem escreveu a história que você conta sobre si mesmo?",
      coracao: "O coração está como a pombinha — transformado, esperando que alguém reconheça o que realmente é.",
      criativo: "A energia criativa está sendo usada para sustentar uma identidade falsa. O que criaria se fosse você mesmo?",
      material: "No corpo: que postura ou aparência você mantém que não corresponde ao que sente por dentro?"
    }
  },

  "Mula sem Cabeça": {
    keywords: ["maldição amorosa", "tabu", "fogo", "galope"],
    upright: {
      theme: "O fogo visível para todos",
      message: "Uma relação que transgride um tabu cobra seu preço — e o preço é visível para todos, menos para você. As patas de ferro ressoam na noite. A chama na cabeça não se esconde.",
      advice: "Examine o que está transgredindo. O fogo que você carrega não é invisível — é o que todos veem quando você passa."
    },
    reversed: {
      theme: "O freio de ferro arrancado",
      message: "Há coragem suficiente — em você ou em alguém próximo — para arriscar o contato com o que queima. O freio pode ser arrancado.",
      advice: "Deixe quem tem coragem tentar. A cura da maldição amorosa exige contato com o que assusta."
    },
    centros: {
      intelecto: "Sua mente sabe que está transgredindo — e construiu justificativas. O argumento elegante não apaga o fogo.",
      coracao: "O coração está no galope — não sabe parar, não sabe descansar. Seis dias, sete povoados.",
      criativo: "A energia criativa está sendo consumida pelo galope compulsivo. O que criaria se pudesse parar?",
      material: "No corpo: que tensão física você carrega que não consegue soltar? As patas de ferro estão no corpo."
    }
  },

  "Mulher da Capa Preta": {
    keywords: ["saudade", "limiar", "dança", "despedida"],
    upright: {
      theme: "O fantasma que só quer dançar",
      message: "Há uma presença do passado que não assusta — apenas tem saudade. A Mulher da Capa Preta é educada, diz que não quer assustar ninguém. Só quer a festa que não terminou.",
      advice: "Dance com o passado enquanto é noite. Mas deixe-o entrar no cemitério à meia-noite. Não vá junto."
    },
    reversed: {
      theme: "A capa na cruz",
      message: "A festa terminou. A capa foi encontrada na cruz da sepultura. O que dançou voltou para onde pertence.",
      advice: "Deixe partir o que era encantador mas não era vivo. A capa que ficou é o registro do que foi real."
    },
    centros: {
      intelecto: "Sua mente está ocupada com a saudade de algo que terminou. O quanto dessa ocupação é escolha?",
      coracao: "O coração ainda está no baile. Quando vai deixar a festa terminar?",
      criativo: "A energia criativa está dançando com um fantasma. O que criaria se dançasse com quem está vivo?",
      material: "No corpo: que objeto da capa preta você ainda guarda? O que seu corpo ainda não soltou?"
    }
  },

  "Negrinho do Pastoreio": {
    keywords: ["proteção", "inocência", "perda", "devoção"],
    upright: {
      theme: "A vela acesa no escuro",
      message: "Algo foi perdido — mas pode ser encontrado. O Negrinho cavalga pelos pampas procurando o que se perdeu. A devoção precisa ser genuína — ele não responde ao protocolo.",
      advice: "Acenda a vela. Peça. Mas peça com devoção real, não com transação. O Negrinho sente a diferença."
    },
    reversed: {
      theme: "O formigueiro primeiro",
      message: "Antes da graça, há o formigueiro. Três dias de dor antes da pele lisa e do cavalo reencontrado. A graça não pula o processo.",
      advice: "Passe pelo formigueiro. A Virgem está ao lado — mas o processo não é encurtado por ninguém."
    },
    centros: {
      intelecto: "Sua mente quer a graça sem o formigueiro. Examine o que está recusando passar.",
      coracao: "O coração sabe onde está o baio perdido. Mas tem medo de encontrar. O que significa reencontrar o que perdeu?",
      criativo: "A energia criativa está nos pampas — vasta, sem direção fixa. Deixe o Negrinho guiar.",
      material: "No corpo: que objeto, hábito ou recurso material você perdeu e ainda não acendeu a vela para encontrar?"
    }
  },

  "Negro d'Água": {
    keywords: ["coletivo", "travessura", "invisibilidade", "bando"],
    upright: {
      theme: "Nunca aparece sozinho",
      message: "O que te perturba não é uma coisa — são várias, agindo em conjunto. O Negro d'Água nunca aparece sozinho. Identifique o bando antes de tentar resolver o problema central.",
      advice: "Ofereça fumo e cachaça. Não aja em noites sem lua. O coletivo que travessa exige respeito coletivo."
    },
    reversed: {
      theme: "O bando foi embora",
      message: "As travessuras cessaram. A canoa está direita, a isca voltou. Mas examine o que foi roubado durante o período de perturbação.",
      advice: "Faça o inventário do que foi perdido nas travessuras. Não tudo voltará — mas é preciso saber o que falta."
    },
    centros: {
      intelecto: "Sua mente está enfrentando os problemas um a um — mas eles agem em bando. Mude a estratégia.",
      coracao: "O coração está desanimado pelas travessuras repetidas. O desânimo é o que o bando quer produzir.",
      criativo: "A energia criativa está sendo sabotada coletivamente. Identifique todos os sabotadores antes de criar.",
      material: "No corpo: que grupo de sintomas físicos aparece junto? O corpo exibe o bando."
    }
  },

  "Onça Cabocla": {
    keywords: ["predação disfarçada", "instinto", "feminino selvagem", "vulnerabilidade"],
    upright: {
      theme: "A velhinha que come fígado cru",
      message: "Algo predatório se apresenta como inofensivo — uma velhinha indígena, experiente, sábia. O fígado é o que quer. O fígado é a sede de coragem.",
      advice: "A única proteção é o olhar firme de quem tem seu próprio poder. Você tem esse poder — mas precisa reconhecê-lo."
    },
    reversed: {
      theme: "O olhar que derrubou",
      message: "O olhar firme aconteceu. A Onça Cabocla caiu dura. O que parecia invencível foi paralisado pelo poder que você sempre teve.",
      advice: "O que derrubou o predador estava disponível o tempo todo. Reconheça esse poder para usá-lo novamente."
    },
    centros: {
      intelecto: "Sua mente está sendo persuadida pela aparência de sabedoria. Examine quem performa sabedoria sem demonstrá-la.",
      coracao: "O coração é o fígado que a Onça Cabocla quer. Está sendo drenado por relações predatórias?",
      criativo: "A energia criativa está sendo consumida pelo predador disfarçado. Quem se alimenta da sua obra sem nutri-la?",
      material: "No corpo: onde sente que sua vitalidade está sendo drenada? O fígado é o órgão da coragem — como está o seu?"
    }
  },

  "Onça-Borges": {
    keywords: ["transformação involuntária", "promessa quebrada", "encantamento", "amizade"],
    upright: {
      theme: "As folhas verdes que não foram colocadas",
      message: "Há um encantamento que poderia ser desfeito — mas exige coragem de se aproximar do que queima. O amigo de Manoel Borges não teve. O feitiço permanece.",
      advice: "Você tem coragem de colocar as folhas verdes na boca da onça? A promessa que foi feita ainda pode ser cumprida."
    },
    reversed: {
      theme: "O retorno de Manoel Borges",
      message: "A coragem chegou. As folhas verdes foram colocadas. O encantamento terminou — o vaqueiro pode voltar.",
      advice: "O que parecia impossível de encarar foi encarado. Reconheça a coragem que isso exigiu."
    },
    centros: {
      intelecto: "Sua mente sabe o que precisa ser feito — e está adiando. O adiamento é a nova forma do encantamento.",
      coracao: "O coração é a amizade que prometeu e não cumpriu. Que promessa está pendente?",
      criativo: "A energia criativa está presa na onça encantada — selvagem, sem direção. As folhas verdes são a forma.",
      material: "No corpo: que tensão física você carrega que corresponde a uma promessa não cumprida?"
    }
  },

  "Pacuera-cuera": {
    keywords: ["consumo interno", "posse", "origem desconhecida", "o que engoliu"],
    upright: {
      theme: "Por onde eu saio?",
      message: "Algo que foi incorporado sem consciência agora pede passagem. A voz interna pergunta 'por onde eu saio?' — e a barriga está prestes a estourar.",
      advice: "Examine a origem de tudo que incorporou recentemente. O que entrou por descuido sai com violência."
    },
    reversed: {
      theme: "A comida recusada",
      message: "Você reconheceu a comida de origem desconhecida antes de engolir. O Pacuera-cuera urrou do lado de fora.",
      advice: "A vigilância funcionou. Mantenha-a. Continue examinando a origem de tudo que incorpora — alimento, ideia, relação."
    },
    centros: {
      intelecto: "Sua mente incorporou ideias sem examinar a fonte. Quem está pensando por você há quanto tempo?",
      coracao: "O coração absorveu emoções de outros como se fossem suas. Faça a distinção: o que é seu, o que é dos outros?",
      criativo: "A energia criativa está sendo dominada por influências que não examinou. Qual é a comida que engoliu sem saber?",
      material: "No corpo: que alimento, substância ou hábito entrou sem sua consciência plena? O corpo manifesta o Pacuera-cuera."
    }
  },

  "Pai-do-Mato": {
    keywords: ["gigante", "floresta", "poder avassalador", "vulnerabilidade oculta"],
    upright: {
      theme: "A roda no umbigo",
      message: "Há algo que parece invencível — maior que as árvores mais altas, com orelhas de madeira. Mas todo poder aparentemente absoluto tem um umbigo com roda. A vulnerabilidade existe.",
      advice: "Não enfrente de frente. Procure a roda. Ela sempre existe — mas só é encontrada por quem para de temer e começa a observar."
    },
    reversed: {
      theme: "A donzela que parou na frente",
      message: "O poder que parecia inexistente funcionou. O que parecia invencível parou.",
      advice: "O que derrubou o gigante não era o que você esperava. Reconheça o poder que sempre teve."
    },
    centros: {
      intelecto: "Sua mente está paralisada pelo tamanho do problema. Mude o ângulo — onde está a roda do umbigo?",
      coracao: "O coração está no urro do Pai-do-Mato — o som que estronda na mata inteira. Que barulho enorme paralisa você?",
      criativo: "A energia criativa está bloqueada pela presença avassaladora. O que criaria se o gigante não estivesse na sala?",
      material: "No corpo: o que parece impossível de mover fisicamente? O umbigo do gigante é onde menos se espera."
    }
  },

  "Papa-Figo": {
    keywords: ["atração perigosa", "doces envenenados", "violação", "corpo"],
    upright: {
      theme: "O doce antes do fígado",
      message: "O que atrai com prazer gratuito quer algo visceral em troca. O Papa-Figo oferece doces — não por generosidade, mas porque o fígado não vem de outra forma.",
      advice: "Não aceite o que parece gratuito sem perguntar o preço real. O custo do doce é sempre o fígado."
    },
    reversed: {
      theme: "O doce recusado",
      message: "O instinto reconheceu a deformidade antes do alcance. Os doces não foram aceitos.",
      advice: "Confie no instinto que recusou. Na próxima vez que sentir esse mesmo sinal, não hesite."
    },
    centros: {
      intelecto: "Sua mente está convencida pelo argumento do gratuito. Nada é gratuito — examine o que está sendo pedido.",
      coracao: "O coração é o fígado que o Papa-Figo quer. Que relação está pedindo acesso ao que você tem de mais vital?",
      criativo: "A energia criativa está sendo atraída por projetos que parecem generosos mas extraem mais do que nutrem.",
      material: "No corpo: que oferta material parece boa demais para ser verdade? O corpo detecta o Papa-Figo antes da mente."
    }
  },

  "Pé-de-Garrafa": {
    keywords: ["hipnose", "assobio", "armadilha sonora", "caverna"],
    upright: {
      theme: "O assobio que não é música",
      message: "Há um chamado que atrai — e não é música, é puro pavor transformado em som. O Pé-de-Garrafa não fala, apenas chama. E quem responde ao chamado não escolheu — foi hipnotizado.",
      advice: "Não assobie à noite. Não responda ao que não reconhece. A roda do umbigo é o único ponto fraco — mas só funciona se você estiver consciente."
    },
    reversed: {
      theme: "O assobio ouvido mas não seguido",
      message: "O chamado foi ouvido — e você ficou. A hipnose não completou o trabalho.",
      advice: "Permaneça consciente do que te chama compulsivamente. A resistência é possível — e precisa ser praticada."
    },
    centros: {
      intelecto: "Sua mente está sendo chamada por um pensamento obsessivo que não tem origem clara. De onde vem esse assobio?",
      coracao: "O coração está respondendo a um chamado que não examinou. O amor que não examina é hipnose.",
      criativo: "A energia criativa está sendo atraída para projetos que parecem inevitáveis mas são armadilhas. Examine a caverna antes de entrar.",
      material: "No corpo: que hábito ou compulsão física você segue sem escolher? O Pé-de-Garrafa mora nos automatismos."
    }
  },

  "Pinto Sura": {
    keywords: ["proteção leal", "obstáculos criados", "fidelidade", "poderes ocultos"],
    upright: {
      theme: "O galo que cospe rios",
      message: "Há um aliado do seu lado com poderes que você ainda não mensurou completamente. A lealdade tem força mágica — e quando acionada, cospe rios inteiros.",
      advice: "Confie no que te é leal. Os poderes do aliado são maiores do que aparecem. Não subestime o galo."
    },
    reversed: {
      theme: "O encantamento mais forte",
      message: "O Pinto Sura foi vencido por algo maior. A proteção tem limites — e esse limite foi alcançado.",
      advice: "Quando o protetor cede, não é hora de desistir — é hora de encontrar outro caminho. O rio ainda pode ser cruzado."
    },
    centros: {
      intelecto: "Sua mente subestima os aliados que não têm aparência convencional de poder. Revise quem está ao seu lado.",
      coracao: "O coração da lealdade está no Pinto Sura — fiel sem calcular. Você tem alguém assim? Você é assim para alguém?",
      criativo: "A energia criativa está no obstáculo que você cria para proteger o processo. Nevoeiro, atoleiro, espinheiro — use-os.",
      material: "No corpo: que recurso físico inesperado você tem disponível que ainda não usou?"
    }
  },

  "Pisadeira": {
    keywords: ["opressão noturna", "excesso", "pesadelo", "corpo"],
    upright: {
      theme: "A velha que desce do telhado",
      message: "A Pisadeira desce quando a barriga está cheia demais. A opressão noturna é diretamente proporcional ao excesso diurno. O acarcanho no peito tem causa identificável.",
      advice: "Não durma de barriga para cima depois de comer demais — literal e metaforicamente. O excesso atrai a opressão."
    },
    reversed: {
      theme: "A posição mudada",
      message: "O ajuste simples foi suficiente. A Pisadeira não encontrou entrada.",
      advice: "Mantenha o equilíbrio que descobriu. O excesso é a única porta que ela usa."
    },
    centros: {
      intelecto: "Sua mente está sobrecarregada — consumiu mais informação do que pode processar. A Pisadeira adora intelecto empanzinado.",
      coracao: "O coração está oprimido por emoções não processadas que foram 'engolidas' durante o dia.",
      criativo: "A energia criativa está sendo esmagada pelo excesso de referências, influências, projetos simultâneos.",
      material: "No corpo: o que você consumiu em excesso — alimento, tela, estimulante? A Pisadeira é literal antes de ser metáfora."
    }
  },

  "Princesa Sapa": {
    keywords: ["amor verdadeiro", "aparência", "transformação", "aceitação"],
    upright: {
      theme: "A sapa na beira do rio",
      message: "O amor verdadeiro não espera que a forma mude para aceitar. A sapa é a princesa — não depois da transformação, mas antes. O que aceita o animal antes de ver o humano é o único amor real.",
      advice: "Aceite o que parece feio na sua forma atual — em si mesmo ou no outro. A transformação vem depois da aceitação, nunca antes."
    },
    reversed: {
      theme: "A princesa continua sapa",
      message: "O amor foi condicional. A sapa permanece sapa. A transformação não aconteceu porque a aceitação não foi real.",
      advice: "Examine o que você recusa aceitar antes que mude. O que perde junto com a recusa?"
    },
    centros: {
      intelecto: "Sua mente está esperando a transformação para aceitar. A lógica está invertida — a aceitação é a condição, não a consequência.",
      coracao: "O coração conhece a sapa como princesa — mas tem vergonha de admitir. De quem é essa vergonha?",
      criativo: "A energia criativa está bloqueada pela expectativa da forma certa. O que criaria se aceitasse a forma que tem agora?",
      material: "No corpo: que aspecto físico você ainda não aceitou como sendo seu? A sapa é o corpo antes do amor."
    }
  },

  "Quibungo": {
    keywords: ["devoração", "costas abertas", "ingenuidade", "fuga"],
    upright: {
      theme: "O buraco que se abre quando abaixa a cabeça",
      message: "Há algo que engole sem mastigar — e sabe quando abaixar a cabeça para que o buraco se abra. A ingenuidade é o que alimenta o Quibungo.",
      advice: "Cante no saco. A menina mais esperta foge durante a distração — quando ele se ocupa com os outros. Use o momento."
    },
    reversed: {
      theme: "Fora do saco",
      message: "A fuga aconteceu durante a distração do Quibungo. A crueldade dele criou o momento que liberou.",
      advice: "O que foi usado para fugir não foi força — foi astúcia e timing. Lembre essa combinação."
    },
    centros: {
      intelecto: "Sua mente está sendo engolida por um sistema que não mastiga o que recebe. Onde está sua voz dentro do saco?",
      coracao: "O coração ainda está cantando dentro do saco — sinal de que não foi totalmente devorado. Continue cantando.",
      criativo: "A energia criativa está no canto dentro do saco — a obra que você faz mesmo preso. Essa é a mais poderosa.",
      material: "No corpo: que estrutura externa está engolindo sua vitalidade sem dar nada em troca?"
    }
  },

  "Romãozinho": {
    keywords: ["criança maldita", "repouso negado", "estrada", "maldade sem paz"],
    upright: {
      theme: "A praga que nunca dorme",
      message: "Há uma energia que não para — que nunca cresceu, nunca dormiu. Uma praga de mãe que ainda ressoa. A estrada está cheia de pedras nos telhados e animais mortos.",
      advice: "Coloque galinha na estrada. A distração do monstro infantil é o que o mantém longe. Às vezes a solução é mais simples do que parece."
    },
    reversed: {
      theme: "Nenhuma galinha foi suficiente",
      message: "Romãozinho está particularmente ativo. As perturbações não cessam com nenhuma oferta.",
      advice: "Algumas energias malignas não têm antídoto permanente — apenas desvio temporário. Concentre-se no que pode proteger, não no que não pode parar."
    },
    centros: {
      intelecto: "Sua mente está em estado de agitação perpétua — nunca cresceu, nunca descansou. Que pensamento infantil você ainda carrega?",
      coracao: "O coração está carregando a praga de uma mãe — real ou simbólica. Qual maldição materna ainda opera em você?",
      criativo: "A energia criativa está sendo sabotada por um impulso destrutivo que não se resolve — apenas se desvia.",
      material: "No corpo: onde o repouso é impossível? Que parte do corpo nunca descansa? Romãozinho mora ali."
    }
  },

  "Saci-Pererê": {
    keywords: ["travessura", "redemoinho", "liberdade", "carapuça"],
    upright: {
      theme: "Vivo no redemoinho",
      message: "Há travessura no ar — e você está no meio de um redemoinho. O Saci não é o problema — é o sintoma. O caos que percebe tem uma criatura no centro.",
      advice: "Jogue a peneira de cruzeta no redemoinho. Tente pegar a carapuça. O Saci respeita quem conhece o truque — e o truque sempre existiu."
    },
    reversed: {
      theme: "A carapuça na mão",
      message: "A carapuça foi capturada. O que era caótico agora pode servir. O Saci obediente tem poderes que o Saci livre não usa a seu favor.",
      advice: "O que era caótico pode ser direcionado — se você souber segurar a carapuça sem apertar demais."
    },
    centros: {
      intelecto: "Sua mente está no bambuzal — saltando de pensamento em pensamento numa perna só. Encontre o centro antes de agir.",
      coracao: "O coração está no redemoinho — levado pelo que sente sem parar para examinar. A carapuça é o autoconhecimento emocional.",
      criativo: "A energia criativa está no caos do Saci — vasta, imprevisível, cheia de potência. Agarre a carapuça antes que o redemoinho passe.",
      material: "No corpo: que perturbação física repetida você ainda não investigou? O Saci deixa marcas físicas."
    }
  },

  "Sargento de Pau": {
    keywords: ["disfarce", "identidade oculta", "fuga", "revelação"],
    upright: {
      theme: "Dentro do boneco de madeira",
      message: "Você está escondido numa casca de madeira — por necessidade, por proteção, por uma fuga que foi necessária. Os vestidos mágicos existem. A cavalariça é temporária.",
      advice: "Mantenha o disfarce enquanto for necessário. O anel de brilhante na tisana revela na hora certa — não antes."
    },
    reversed: {
      theme: "É hora de sair do boneco",
      message: "O anel foi encontrado na tisana. O disfarce já não é necessário. A cavalariça ficou para trás.",
      advice: "Saia do boneco de madeira. O príncipe perguntou de onde é — você não precisa mais responder com o nome de uma terra de pancadas."
    },
    centros: {
      intelecto: "Sua mente está operando de dentro de um disfarce — pensando como a casca, não como o que está dentro dela.",
      coracao: "O coração está nos três vestidos mágicos — cor do campo, cor do mar, cor do céu com estrelas. Qual é o vestido real?",
      criativo: "A energia criativa está dentro do boneco oco. O que cria quando ninguém sabe que é você?",
      material: "No corpo: que postura física você assume que não é a sua? O boneco de madeira tem uma postura — o corpo real tem outra."
    }
  },

  "Serpente de São Luís": {
    keywords: ["crescimento inevitável", "limite", "destruição anunciada", "espera"],
    upright: {
      theme: "A cabeça que não encontrou a cauda — ainda",
      message: "Há algo que não para de crescer — debaixo da consciência, debaixo da cidade. Cabeça no Ribeirão, corpo pelo Carmo, cauda em São Pantaleão. Quando se encontrarem, a estrutura cede.",
      advice: "Esteja ciente do crescimento subterrâneo. Examine onde a cabeça e a cauda do problema estão e quanta distância ainda separam."
    },
    reversed: {
      theme: "A serpente ainda cresce",
      message: "A cabeça não encontrou a cauda — há tempo. A destruição anunciada ainda pode ser evitada ou ao menos preparada.",
      advice: "Use o tempo que resta. Não para impedir o inevitável — para preparar o que pode ser salvo."
    },
    centros: {
      intelecto: "Sua mente sabe que há um problema crescendo que não examina. Nomeie a serpente — onde está a cabeça, onde está a cauda?",
      coracao: "O coração está na escrava que sofreu tanto que se transformou. Que sofrimento em você está tomando forma de serpente?",
      criativo: "A energia criativa está represada pela serpente que cresce — quando ela se liberar, o que será destruído para criar?",
      material: "No corpo: que processo físico está crescendo silenciosamente? A serpente de São Luís mora no que não se examina."
    }
  },

  "Teiniaguá": {
    keywords: ["riqueza encantada", "amor proibido", "olhos que capturam", "cruz"],
    upright: {
      theme: "Os olhos de amor tão soberanos",
      message: "Há algo de uma beleza impossível de resistir — em mil vidas de homem, outros olhos assim não se viram. O tesouro é real. A condição também: não esconjurar com a cruz.",
      advice: "Examine o que você precisa soltar para receber o que é extraordinário. O rosário é real — e a Teiniaguá também."
    },
    reversed: {
      theme: "O sacristão de pé",
      message: "O rosário foi erguido. A Teiniaguá desapareceu. O tesouro não foi alcançado — mas o sacristão ficou de pé.",
      advice: "Às vezes manter-se de pé vale mais do que o tesouro. O que você preservou ao resistir?"
    },
    centros: {
      intelecto: "Sua mente está fascinada pelo extraordinário a ponto de ceder o que não deveria. Onde está o limite?",
      coracao: "O coração está na lagoa fervente — em contato com algo que queima e encanta ao mesmo tempo.",
      criativo: "A energia criativa está nos olhos da Teiniaguá — capturante, extraordinária, mas que exige uma condição.",
      material: "No corpo: que beleza física te captura a ponto de perder o que é seu? O tesouro da Teiniaguá cobra em moeda corporal."
    }
  },

  "Tutu-Marambá": {
    keywords: ["terror noturno", "acalanto", "infância", "proteção invocada"],
    upright: {
      theme: "Puro som à beira do berço",
      message: "O Tutu-Marambá nunca foi descrito com clareza — porque ninguém o viu e sobreviveu para contar. É puro terror sussurrado. Existe no espaço entre o acalanto e o sono.",
      advice: "Cante o acalanto até o fim: 'o pai do menino te manda matar.' A proteção existe — mas precisa ser invocada completamente."
    },
    reversed: {
      theme: "O acalanto que silenciou",
      message: "O canto chegou ao fim. O Tutu-Marambá recuou. O berço está quieto.",
      advice: "O terror que não tem forma recua quando encontra amor firme e completo. Não pare o canto no meio."
    },
    centros: {
      intelecto: "Sua mente está habitada por um terror sem forma — uma ansiedade que não consegue nomear. Tente nomear mesmo que provisoriamente.",
      coracao: "O coração está no berço — vulnerável, esperando proteção. Quem canta o acalanto para você?",
      criativo: "A energia criativa está no espaço entre o terror e o sono — o estado hipnagógico onde o Tutu-Marambá habita.",
      material: "No corpo: que perturbação noturna específica você tem? O Tutu-Marambá é o mais literal dos terrors."
    }
  },

  "Uiara": {
    keywords: ["profundidade", "fartura", "encantamento aquático", "renúncia"],
    upright: {
      theme: "Meia-noite o rio dorme",
      message: "Nas noites de lua cheia, a Uiara canta. O rio dorme dois minutos — e para ela, é tempo enorme. Há um convite das profundezas que você está recebendo.",
      advice: "Responda ao chamado das profundezas — mas nunca arenegue da gente de baixo d'água. Ela ouve tudo."
    },
    reversed: {
      theme: "O arenegamento que custou tudo",
      message: "O arenegamento aconteceu. A Uiara cantou e foi — com filhos, gado, casa, plantações. O que foi levado era o que mais importava.",
      advice: "O que foi levado era precioso. Reconheça o custo real antes de procurar substituição."
    },
    centros: {
      intelecto: "Sua mente arenegou de uma fonte de conhecimento profundo que não compreende. Que porta fechou por arrogância intelectual?",
      coracao: "O coração é o pescador que ouve o canto. O que o canto da Uiara está chamando em você?",
      criativo: "A energia criativa está nas águas profundas — onde o rio dorme e os afogados dançam com estrelas.",
      material: "No corpo: que fonte de sustento você desrespeitou com palavras descuidadas? As palavras têm peso material."
    }
  },

  "Urutau": {
    keywords: ["amor perdido", "vaidade punida", "luto eterno", "canto de morte"],
    upright: {
      theme: "Uuuuuuuuuu — U-u-u-u-u!",
      message: "A irmã vaidosa desprezou o Homem-Estrela. Quando o viu jovem e forte, quis tomá-lo da caçula. Ele a rejeitou. O canto do urutau é o som do que não se conforma com a perda que causou.",
      advice: "Examine o papel que a vaidade jogou na perda que você lamenta. O luto real começa quando para de culpar o outro."
    },
    reversed: {
      theme: "O canto que pode terminar",
      message: "O urutau pode parar de cantar — não porque o amor voltou, mas porque o luto foi completado.",
      advice: "É possível sair da litania. O amor próprio que cuida é diferente da vaidade que destruiu. Aprenda a diferença."
    },
    centros: {
      intelecto: "Sua mente está em loop com o que perdeu. O loop é o canto do urutau — longo, fundo, repetitivo.",
      coracao: "O coração está no galho seco — encolhido de dia, cantando sua dor de noite. Há vida aqui ainda.",
      criativo: "A energia criativa está no canto do urutau — que é feio, que é fundo, que é real. Use essa autenticidade.",
      material: "No corpo: que postura corporal você assume quando lamenta? O urutau tem uma postura específica — qual é a sua?"
    }
  },

  "Vareiro Encantado": {
    keywords: ["travessia", "expiação", "karma", "Caronte"],
    upright: {
      theme: "O Caronte do Parnaíba",
      message: "Há uma travessia a fazer. O Vareiro canta toadas melancólicas em lua nova — e as almas expiam durante a viagem. O processo não é punição: é processamento.",
      advice: "Pague a travessia com boas ações em vida. O que você está carregando que pode resolver antes de subir na barca?"
    },
    reversed: {
      theme: "A barca que passou sem você",
      message: "A barca passou e você não estava nela. Ainda há tempo de pagar a travessia de outra forma.",
      advice: "Use o tempo que a barca não levou. A expiação em vida é sempre preferível à da travessia."
    },
    centros: {
      intelecto: "Sua mente está evitando pensar no que precisa ser expiado. A toada melancólica é o pensamento que você foge.",
      coracao: "O coração está na barca — em travessia, processando o que não foi resolvido em vida.",
      criativo: "A energia criativa está nas toadas do Vareiro — melancólica, noturna, feita de lua nova. Que obra nasce dessa luz fraca?",
      material: "No corpo: que peso específico você carrega que pertence à barca — não à vida cotidiana?"
    }
  }

};

// Posições da Cruz Celta
const celticCrossPositions = [
  { id: 1, name: "A situação presente", description: "O centro — o que está acontecendo agora" },
  { id: 2, name: "O que cruza", description: "O obstáculo ou o que apoia — o que interfere" },
  { id: 3, name: "O que está abaixo", description: "A raiz inconsciente da situação" },
  { id: 4, name: "O que passou", description: "O que ficou para trás, o que influencia" },
  { id: 5, name: "O que coroa", description: "O que pode se tornar consciente, o potencial" },
  { id: 6, name: "O que virá", description: "O futuro próximo, o que se aproxima" },
  { id: 7, name: "Como você se vê", description: "Sua percepção de si mesmo na situação" },
  { id: 8, name: "Como os outros te veem", description: "A influência externa, o ambiente" },
  { id: 9, name: "Esperanças e medos", description: "O que você deseja e teme ao mesmo tempo" },
  { id: 10, name: "O resultado final", description: "A síntese — para onde tudo caminha" }
];

// Posições da tiragem de 3
const threeCardPositions = [
  { id: 1, name: "Passado", description: "O que moldou a situação" },
  { id: 2, name: "Presente", description: "O que está em jogo agora" },
  { id: 3, name: "Futuro", description: "O que se aproxima" }
];
