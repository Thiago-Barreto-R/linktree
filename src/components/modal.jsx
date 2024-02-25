/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Atom, Instagram, Smartphone, Github, Linkedin } from "lucide-react";

export function CardModal() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="flex flex-col items-center justify-center">
          <img src="" alt="Foto de perfil" />
          <h1 className="text-lg">Thiago Barreto Rodrigues</h1>
        </CardTitle>
        <CardDescription className="flex ite justify-center gap-2">
          Formado em Ciência da computação <Atom size={18} />
        </CardDescription>
      </CardHeader>
      <div className="w-full flex justify-around">
        <Instagram />
        <Smartphone />
        <Github />
        <Linkedin />
      </div>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
