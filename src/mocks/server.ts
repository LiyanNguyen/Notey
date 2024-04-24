import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const API_URL = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${API_URL}/notes`, () => {
    return HttpResponse.json({
      notes: [
        {
          _id: "66226cb87bf1b8c46c51d243",
          title: "coma patruus",
          description: "Basium molestiae conspergo inflammatio deludos.",
          rating: 2,
          color: "red",
          __v: 0,
          createdAt: "2024-04-19T13:08:08.288Z",
          updatedAt: "2024-04-23T13:07:43.398Z",
        },
        {
          _id: "6620dfbd5f4b97b8d1de0279",
          title: "assentator angulus",
          description:
            "Tantum comparo astrum arma damnatio crinis curiositas ventosus.",
          rating: 2,
          color: "slate",
          __v: 0,
          createdAt: "2024-04-18T08:54:21.205Z",
          updatedAt: "2024-04-18T08:54:21.205Z",
        },
        {
          _id: "66226cb87bf1b8c46c51d23c",
          title: "argumentum demulceo",
          description: "Colo tendo colo creo.",
          rating: 2,
          color: "green",
          __v: 0,
          createdAt: "2024-04-19T13:08:08.288Z",
          updatedAt: "2024-04-20T21:03:31.182Z",
        },
        {
          _id: "66226cb87bf1b8c46c51d23a",
          title: "cohaero similique",
          description: "Comes tergum vitium.",
          rating: 3,
          color: "blue",
          __v: 0,
          createdAt: "2024-04-19T13:08:08.288Z",
          updatedAt: "2024-04-23T12:52:01.848Z",
        },
        {
          _id: "66226cb87bf1b8c46c51d247",
          title: "cunae vorax",
          description:
            "Uberrime tremo ducimus admoneo cicuta balbus voveo acerbitas adulescens.",
          rating: 3,
          color: "slate",
          __v: 0,
          createdAt: "2024-04-19T13:08:08.289Z",
          updatedAt: "2024-04-19T13:08:08.289Z",
        },
        {
          _id: "6620dfbd5f4b97b8d1de027d",
          title: "tamisium conculco",
          description: "Denique aegrotatio despecto auditor adflicto.",
          rating: 4,
          color: "green",
          __v: 0,
          createdAt: "2024-04-18T08:54:21.206Z",
          updatedAt: "2024-04-20T21:03:04.186Z",
        },
        {
          _id: "6620dfbd5f4b97b8d1de0281",
          title: "abutor carpod",
          description: "Cunae tabella admitto.",
          rating: 4,
          color: "red",
          __v: 0,
          createdAt: "2024-04-18T08:54:21.206Z",
          updatedAt: "2024-04-20T20:47:51.378Z",
        },
        {
          _id: "66226cb87bf1b8c46c51d246",
          title: "delinquo velum",
          description: "Commodi ter vicinus aggredior defungo.",
          rating: 4,
          color: "yellow",
          __v: 0,
          createdAt: "2024-04-19T13:08:08.289Z",
          updatedAt: "2024-04-19T13:08:08.289Z",
        },
        {
          _id: "66226cb87bf1b8c46c51d240",
          title: "virga supra",
          description:
            "Statua voluptas cultura vehemens voluptatem cultura debitis sonitus.",
          rating: 4,
          color: "blue",
          __v: 0,
          createdAt: "2024-04-19T13:08:08.288Z",
          updatedAt: "2024-04-22T16:09:40.162Z",
        },
        {
          _id: "6620dfbd5f4b97b8d1de027a",
          title: "incidunt depromod",
          description: "Sint utrum valde adhuc canonicus.",
          rating: 5,
          color: "green",
          __v: 0,
          createdAt: "2024-04-18T08:54:21.206Z",
          updatedAt: "2024-04-23T12:08:08.002Z",
        },
        {
          _id: "6620de629490e21763796b8b",
          title: "cibo aperio",
          description: "Demonstro tonsor caute libero utrum natus possimus.",
          rating: 5,
          color: "slate",
          createdAt: "2024-04-18T08:48:34.007Z",
          updatedAt: "2024-04-20T21:20:45.130Z",
          __v: 0,
        },
        {
          _id: "66226cb87bf1b8c46c51d242",
          title: "quaerat adipisci",
          description:
            "Caute tenetur vehemens cetera sophismata tres abbas atque suadeo talus.",
          rating: 5,
          color: "blue",
          __v: 0,
          createdAt: "2024-04-19T13:08:08.288Z",
          updatedAt: "2024-04-23T12:51:51.646Z",
        },
      ],
      total: 36,
      pages: 3,
      skip: 0,
    });
  }),

  http.post(`${API_URL}/notes`, ({ request }) => {
    const { title, description, color, rating } = request.body as unknown as {
      title: string;
      description: string;
      color: string;
      rating: number;
    };

    return HttpResponse.json({
      title,
      description,
      color,
      rating,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }),

  http.patch(`${API_URL}/notes/:id`, () => {
    const updatedNote = {
      _id: "66226cb87bf1b8c46c51d242",
      title: "quaerat adipisci",
      description:
        "Caute tenetur vehemens cetera sophismata tres abbas atque suadeo talus.",
      rating: 5,
      color: "blue",
      __v: 0,
      createdAt: "2024-04-19T13:08:08.288Z",
      updatedAt: "2024-04-23T12:51:51.646Z",
    };

    return HttpResponse.json(updatedNote);
  }),

  http.delete(`${API_URL}/notes/:id`, () => {
    const deletedNote = {
      _id: "66226cb87bf1b8c46c51d242",
      title: "quaerat adipisci",
      description:
        "Caute tenetur vehemens cetera sophismata tres abbas atque suadeo talus.",
      rating: 5,
      color: "blue",
      __v: 0,
      createdAt: "2024-04-19T13:08:08.288Z",
      updatedAt: "2024-04-23T12:51:51.646Z",
    };

    return HttpResponse.json(deletedNote);
  }),
];

export const server = setupServer(...handlers);
