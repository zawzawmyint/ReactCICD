import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { CardDescription } from "./components/ui/card";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh space-y-2">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to React CICD</h1>
        <CardDescription className="mt-4 text-lg italic border-l-4 border-l-primary pl-4">
          This is a simple template to get started React cicd with Github
          actions and deploy to Netlify.
        </CardDescription>
      </div>
      <Button
        className="mt-4 animate-pulse relative z-10"
        size={"lg"}
        variant={"secondary"}
      >
        <Github />
        Github
      </Button>
    </div>
  );
}

export default App;
