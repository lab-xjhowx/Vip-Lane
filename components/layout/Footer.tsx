import Link from 'next/link';
import { Crown, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-vip-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-vip-gold" />
              <span className="text-2xl font-bold vip-gradient">VIPLane</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A plataforma premium de cursos online que transforma conhecimento em resultados reais. 
              Acesso VIP ao melhor conteúdo educacional do Brasil.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-vip-gold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#categorias" className="text-gray-300 hover:text-white transition-colors">
                  Categorias
                </Link>
              </li>
              <li>
                <Link href="#cursos" className="text-gray-300 hover:text-white transition-colors">
                  Todos os Cursos
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-lg font-semibold text-vip-gold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#marketing" className="text-gray-300 hover:text-white transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link href="#programacao" className="text-gray-300 hover:text-white transition-colors">
                  Programação
                </Link>
              </li>
              <li>
                <Link href="#empreendedorismo" className="text-gray-300 hover:text-white transition-colors">
                  Empreendedorismo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-vip-gold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-vip-gold" />
                <span className="text-gray-300 text-sm">contato@viplane.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-vip-gold" />
                <span className="text-gray-300 text-sm">+55 (11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-vip-gold" />
                <span className="text-gray-300 text-sm">São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2024 VIPLane. Todos os direitos reservados. Desenvolvido por Jonathan.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/termos" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}