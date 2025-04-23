import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { CardDescription } from "./components/ui/card";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh space-y-2">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome to React CICD</h1>
        <CardDescription className="mt-4 text-lg italic border-l-4 border-l-primary pl-4">
          Check out my React CI/CD setup with GitHub Actions and Netlify
          deployment.
        </CardDescription>
      </div>
      <Button className="mt-4" size={"lg"} variant={"secondary"} asChild>
        <a
          href="https://github.com/zawzawmyint/ReactCICD/blob/master/.github/workflows/ci-cd.yml"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium mt-4 animate-pulse relative z-10 transition-colors"
        >
          <Github size={20} />
          <span> View the CI/CD workflow configuration</span>
        </a>
      </Button>
    </div>
  );
}

export default App;
