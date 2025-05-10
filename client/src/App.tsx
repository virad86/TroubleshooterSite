import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HomePage from "@/pages/home";
import RacingLinesSamples from "@/pages/racing-lines";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-to-content focus:outline-none">
        Skip to content
      </a>
      
      <header role="banner">
        <Navbar />
      </header>
      
      <main id="main-content" className="main-content flex-grow" role="main" tabIndex={-1}>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/racing-lines" component={RacingLinesSamples} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <footer role="contentinfo">
        <Footer />
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
