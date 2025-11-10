import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logod2 from "@/assets/logod2.png";

const LoginContador = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Esta área ainda não esta disponível",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-muted/30 flex items-center justify-center px-4 pt-20">
        <div className="w-full max-w-md">
          <div className="bg-background rounded-lg shadow-lg p-8 md:p-12">
            {/* Warning message */}
            <div className="flex items-center justify-center gap-2 mb-6 text-primary">
              <span className="text-2xl">:(</span>
              <p className="text-center text-sm font-medium">
                Esta parte do site ainda não está disponível
              </p>
            </div>
            
            <div className="flex justify-center mb-8">
              <img
                src={logod2} 
                alt="D2 Tecnologia" 
                className="h-20 w-auto object-contain"
              />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="h-12 text-base"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full h-12 text-base font-semibold bg-[#F7941D] hover:bg-[#F7941D]/90 text-white"
              >
                Acessar
              </Button>
              
              <div className="text-center">
                <a 
                  href="#" 
                  className="text-primary text-sm hover:underline"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginContador;
