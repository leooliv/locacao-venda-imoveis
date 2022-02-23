export interface RealEstate {
  id: number;
  nome: string;
  tipo: string[];
  valor: number;
  condominio: number;
  quartos: number;
  banheiros: number;
  mobiliado: boolean;
  area: number;
  venda: boolean;
  aluguel: boolean;
  dataAnuncio: string;
  endereco: RealEstateAdress[];
  proprietarioId: number;
}

export interface RealEstateAdress {
  id: number;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
}
