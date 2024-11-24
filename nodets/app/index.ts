import express, { Request, Response } from "express";

const app = express();

const router = express.Router();

interface User {
  id: string;
  ad: string;
  soyad: string;
}

router.get("/user", (req: Request, res: Response) => {
  const arr: User[] = [
    { ad: "Ali", id: "1", soyad: "Kaya" },
    { ad: "Ayşe", id: "2", soyad: "İnci" },
  ];
  res.status(200).json(arr);
});

router.post("/user", (req: Request, res: Response) => {
  const obj: User = { ad: "İrem", id: "3", soyad: "Burcu" };
  res.status(201).json(obj);
});

app.use(router);

app.listen(5000, () => {
  console.log(5000);
});
 