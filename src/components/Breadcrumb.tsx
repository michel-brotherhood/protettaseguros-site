import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();

  // Mapeamento de rotas para breadcrumbs
  const routeMap: Record<string, BreadcrumbItem[]> = {
    "/": [{ label: "Home" }],
    "/cliente": [
      { label: "Home", href: "/" },
      { label: "Área do Cliente" }
    ],
    "/corretor": [
      { label: "Home", href: "/" },
      { label: "Área do Corretor" }
    ],
    "/sobre": [
      { label: "Home", href: "/" },
      { label: "Sobre Nós" }
    ],
    "/contato": [
      { label: "Home", href: "/" },
      { label: "Contato" }
    ],
    "/cotacao": [
      { label: "Home", href: "/" },
      { label: "Solicitar Cotação" }
    ],
    "/sistema-bi": [
      { label: "Home", href: "/" },
      { label: "Soluções", href: "/" },
      { label: "Sistema B.I." }
    ],
    "/wellness": [
      { label: "Home", href: "/" },
      { label: "Soluções", href: "/" },
      { label: "Wellness Corporativo" }
    ],
    "/prochange": [
      { label: "Home", href: "/" },
      { label: "#ProChange" }
    ],
  };

  const breadcrumbItems = items || routeMap[location.pathname] || [{ label: "Home", href: "/" }];

  return (
    <nav aria-label="Breadcrumb" className="py-4 border-b border-border/50 bg-muted/30">
      <div className="container mx-auto px-4">
        <ol 
          className="flex items-center gap-2 text-sm"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const isFirst = index === 0;

            return (
              <li
                key={index}
                className="flex items-center gap-2 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {!isFirst && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                )}
                
                {item.href && !isLast ? (
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline flex items-center gap-1"
                    itemProp="item"
                  >
                    {isFirst && <Home className="h-4 w-4" />}
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span 
                    className={`flex items-center gap-1 ${
                      isLast 
                        ? "text-foreground font-medium" 
                        : "text-muted-foreground"
                    }`}
                    itemProp="name"
                  >
                    {isFirst && <Home className="h-4 w-4" />}
                    {item.label}
                  </span>
                )}
                
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
