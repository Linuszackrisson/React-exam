# React Exam Av Linus Zackrisson

## Motivering för Val av Extra Hooks/Bibliotek

### React Icons

Eftersom uppgiften var att skapa en mobilanpassad applikation och jag tidigt bestämde mig för att ha en fast botten navigeringsfält på sidan, var ett ikonbibliotek ett självklart val. Ikoner tar upp mindre utrymme och ger mer av en "mobilapp-vibb" enligt min åsikt. Dessutom är de extremt enkla att installera och använda.

Funktionaliteten är enkel: du installerar biblioteket och sedan importerar du ikonpaketet i den önskade komponenten och använder dem som vanliga komponenter.

### Framer Motion

Det är 2024, och vi behöver rörelse både i våra kroppar och i den digitala världen. Därför valde jag Framer Motion för att "enkelt" kunna skapa moderna animationer (jämfört med att skriva femtio rader med vanlig CSS) som får sidan att kännas levande.

Inlärningskurvan var skrämmande i början, men efter några handledningar med indiskt påbrå och genom att bläddra igenom deras officiella sida började mina komponenter långsamt röra sig. 

För att använda Framer Motion importerar du `{ motion }` från "framer-motion" i den önskade komponenten, och istället för att bara namnge ditt element, till exempel `<div>`, skriver du helt enkelt `<motion.div>` istället.

Sedan skriver du något som `animate initial={{ opacity: 0 }}` (det är osynligt när komponenten först "visas"), `animate={{ opacity: 1 }}` (tillståndet vi vill att den ska vara i), `transition={{ duration: 1 }}` (tiden det tar).

Vad får vi ut av det? En smidig, enkel fade-in effekt.

Det var ett simpelt exempel, men vad jag har förstått som är biblioteket ganska kraftfullt, absolut något jag kommer använda mig av i framtida projekt.



