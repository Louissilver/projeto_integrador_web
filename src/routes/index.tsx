import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Cadastro,
  Contato,
  Empreendimentos,
  Sobre,
  Empreendimento,
} from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/inicio" element={<Empreendimentos />} />
      <Route path="/empreendimentos/:id" element={<Empreendimento />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="*" element={<Navigate to="/inicio" />} />
    </Routes>
  );
};
