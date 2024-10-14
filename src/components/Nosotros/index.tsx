import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
};

const roleGroups = [
  {
    title: "Frontend",
    members: [
      {
        name: "Francisco Albert",
        role: "Frontend Developer",
        image: "assets/team-images/francisco.jpeg",
        github: "https://github.com/fran-albert",
        linkedin: "https://www.linkedin.com/in/francisco-albert-091646195/",
      },
      {
        name: "Elias Giannantonio",
        role: "Frontend Developer",
        image: "assets/team-images/elias.jpeg",
        github: "https://github.com/eliasgiannantonio",
        linkedin: "https://www.linkedin.com/in/elias-giannantonio/",
      },
      {
        name: "Leandro Mortarini",
        role: "Frontend Developer",
        image: "assets/team-images/leandro.jpeg",
        github: "https://github.com/leandromortarini2",
        linkedin: "https://www.linkedin.com/in/leandro-mortarini/",
      },
    ],
  },
  {
    title: "UX/UI",
    members: [
      {
        name: "Nazarena Khouri",
        role: "UX Designer",
        image: "assets/team-images/nazarena.jpeg",
        github: "",
        linkedin: "https://www.linkedin.com/in/nazarena-khouri-56b615213/",
      },
    ],
  },
  {
    title: "Dev Ops",
    members: [
      {
        name: "Francisco Albert",
        role: "Dev Ops",
        image: "assets/team-images/francisco.jpeg",
        github: "https://github.com/fran-albert",
        linkedin: "https://www.linkedin.com/in/francisco-albert-091646195/",
      },
    ],
  },
  {
    title: "Backend",
    members: [
      {
        name: "Pablo Bouvier",
        role: "Backend Developer",
        image: "assets/team-images/pablo-bouvier.jpeg",
        github: "https://github.com/ErikBouvier",
        linkedin: "https://www.linkedin.com/in/pablo-bouvier-b503b214/",
      },
      {
        name: "Eric Christensen",
        role: "Backend Developer",
        image: "assets/team-images/eric.jpeg",
        github: "https://github.com/Excelsior50",
        linkedin:
          "https://www.linkedin.com/in/eric-christensen-arocena-691653184/",
      },
      {
        name: "Lautaro Pintos",
        role: "Backend Developer",
        image: "assets/team-images/laucha.jpeg",
        github: "https://github.com/LPintos14",
        linkedin: "https://www.linkedin.com/in/lautaro-pintos-20417a109/",
      },
      {
        name: "Judit Alvarez Rubio",
        role: "Backend Developer",
        image: "assets/team-images/judit.jpeg",
        github: "https://github.com/juditsoria",
        linkedin: "https://www.linkedin.com/in/judit-alvarez-rubio-ba0707234/",
      },
      {
        name: "Rodrigo Asis",
        role: "Backend Developer",
        image: "assets/team-images/rodrigo.jpeg",
        github: "https://github.com/rodrigoasis87",
        linkedin: "https://www.linkedin.com/in/rodrigo-asis/",
      },
    ],
  },
  {
    title: "Data Analysis",
    members: [
      {
        name: "Malena Schiselman",
        role: "Data Analyst",
        image: "assets/team-images/malena.jpeg",
        github: "https://github.com/schiselwoman",
        linkedin:
          "https://xlab.igrowker.com/www.linkedin.com/in/malena-schiselman",
      },
      {
        name: "Santiago Bailleres",
        role: "Data Analyst",
        image: "assets/team-images/santiago.jpeg",
        github: "https://github.com/santipazo",
        linkedin:
          "https://xlab.igrowker.com/www.linkedin.com/in/santiagobailleres",
      },
      {
        name: "Marcelo Peralta",
        role: "Data Analyst",
        image: "assets/team-images/chelo.jpeg",
        github: "https://github.com/Tato2013",
        linkedin: "https://www.linkedin.com/in/marcelo-peralta2/",
      },
      {
        name: "Ignacio Arce",
        role: "Data Analyst",
        image: "assets/team-images/nachoarce.jpeg",
        github: "https://github.com/IAIgnacioArce",
        linkedin: "https://xlab.igrowker.com/www.linkedin.com/in/arceignacio",
      },
      {
        name: "Matias Cavallo",
        role: "Data Analyst",
        image: "assets/team-images/matiasleonel.jpeg",
        github: "https://github.com/Matomill",
        linkedin: "https://www.linkedin.com/in/matias-leonel-cavallo-28792241/",
      },
      {
        name: "Lucas Gonzalez",
        role: "Data Analyst",
        image: "assets/team-images/lucas.jpeg",
        github: "https://github.com/lucasexe98",
        linkedin: "https://www.linkedin.com/in/lucasgonzaleez/",
      },
    ],
  },
  {
    title: "Project Management",
    members: [
      {
        name: "Ernesto Cevasco",
        role: "Project Manager",
        image: "assets/team-images/ernesto.jpg",
        github: "https://github.com/Noobuyer",
        linkedin: "https://www.linkedin.com/in/ernesto-cevasco-6b166a12b/",
      },
      {
        name: "Christian Gil",
        role: "Project Manager",
        image: "assets/team-images/cristian-pm.jpeg",
        github: "https://github.com/Chgrar",
        linkedin: "https://www.linkedin.com/in/christiangil72/",
      },
    ],
  },
  {
    title: "QA Testing",
    members: [
      {
        name: "Roberto Ezequiel Sanchez",
        role: "QA Tester",
        image: "assets/team-images/roberto.jpeg",
        github: "https://github.com/Resstar93",
        linkedin: "https://linkedin.com/in/robertoezequielsanchez",
      },
      {
        name: "Angel Salazar Maylle",
        role: "QA Tester",
        image: "assets/team-images/angelsalazar.jpeg",
        github: "https://github.com/Angelzaki",
        linkedin: "https://www.linkedin.com/in/angel-salazar-maylle-36236b198/",
      },
    ],
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <Card className="w-full max-w-sm">
    <CardHeader className="flex flex-row items-center gap-4">
      <Avatar className="h-16 w-16">
        <AvatarImage alt={member.name} src={member.image} />
        <AvatarFallback>
          {member.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <CardTitle>{member.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{member.role}</p>
      </div>
    </CardHeader>
    <CardContent>
      <div className="flex justify-start space-x-4">
        <Button variant="outline" size="icon" asChild>
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub de ${member.name}`}
          >
            <Github className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${member.name}`}
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default function NostrosComponent() {
  return (
    <section className="container mx-auto py-12">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-white mb-12">
          Nuestro Equipo
        </h2>
        <ScrollArea className="h-[calc(100vh-200px)] px-1">
          <div className="space-y-12 pr-4 text-white">
            {roleGroups.map((group, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold mb-6">{group.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {group.members.map((member, memberIndex) => (
                    <TeamMemberCard key={memberIndex} member={member} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
