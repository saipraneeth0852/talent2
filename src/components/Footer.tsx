import TalentAccelLogo from "./TalentAccelLogo";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const columns = [
  { title: "Company", links: ["About Us", "Leadership", "Careers", "Contact"] },
  { title: "Services", links: ["Talent Acquisition", "Offshore Teams", "Payroll & Compliance", "HR Advisory"] },
  { title: "Industries", links: ["SaaS & Product", "AI / Data Science", "FinTech", "Telecom"] },
  { title: "Resources", links: ["Hiring Guides", "HR Templates", "Blog", "Case Studies"] },
];

const Footer = () => (
  <footer className="border-t border-border py-16">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
        <div className="col-span-2 md:col-span-1">
          <TalentAccelLogo className="mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">Building the teams that accelerate your business.</p>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="font-bold text-sm mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link, j) => (
                <li key={j}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-xs text-muted-foreground border-t border-border pt-8">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Bengaluru, India</span>
          <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> hr@talentaccel.com</span>
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91 84318 67096</span>
        </div>
        <div className="md:ml-auto flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mt-4">© {new Date().getFullYear()} TalentAccel. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
