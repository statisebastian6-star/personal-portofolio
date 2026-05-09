import { ImageWithFallback } from "../components/ImageWithFallback";
import formValidationImg from "../../imports/image-6.png";
import commentInjectionImg from "../../imports/image-7.png";
import emailValidationImg from "../../imports/image-8.png";
import cardRenderingImg from "../../imports/image-9.png";
import searchFilterImg from "../../imports/image-10.png";
import craftingTreeImg from "../../imports/image-11.png";
import tabbedNavImg from "../../imports/image-12.png";

export function WebDevelopmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-12">
        <h1 className="mb-4">Web Development</h1>
        <p className="text-lg max-w-3xl">
          The Web Development Page focuses on the technical, code-side of my work  how websites are structured with HTML, styled with CSS, and made interactive with JavaScript. Below are two projects that evidence different stages of my coding ability. HugPups is a multi-page site I built largely by hand in plain HTML, CSS and JavaScript with no frameworks, evidencing my foundational coding skill. The Rust Toolkit is a more complex interactive web application I designed and built with AI assistance for parts of the implementation, evidencing my ability to plan and integrate larger systems and to use modern AI tools as part of a developer workflow.
        </p>
      </div>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#548235]"></div>
          <h2>Interactive Features – HugPups</h2>
        </div>
        <p className="text-lg mb-8 max-w-3xl">
          HugPups is an 8-page therapy dog visitation website built in plain HTML, CSS and JavaScript with no frameworks. I deliberately wrote the code with inline comments throughout so the codebase doubles as a learning reference. Below are two of the main interactive features I built into the site: comprehensive form validation and dynamic content injection.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4">
            <h3>Form Validation</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={formValidationImg}
                alt="Form validation screenshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`function submitComment() {
  clearCommentErrors();

  var name = document.getElementById("commentName").value;
  var comment = document.getElementById("commentText").value;

  var hasError = false;

  // Check the name is not empty
  if (name === "") {
    document.getElementById("errorCommentName").className = "error-text show";
    document.getElementById("commentName").className = "input-error";
    hasError = true;
  }

  // Check the comment is at least 10 characters
  if (comment.length < 10) {
    document.getElementById("errorCommentText").className = "error-text show";
    document.getElementById("commentText").className = "input-error";
    hasError = true;
  }

  if (hasError === true) return;
  // ... rest of function adds the comment
}`}</code></pre>
            </div>
            <p className="text-sm">
              Client-side validation on the testimonials submission form. The name field is checked to ensure it is not empty, and the comment field is checked against a minimum length of 10 characters. If validation fails, the affected fields are highlighted and inline error messages appear. If all checks pass, the form is allowed to submit and the rest of the function runs.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4">
            <h3>Dynamic Comment Injection</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <ImageWithFallback
                src={commentInjectionImg}
                alt="Dynamic comment injection screenshot"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`// Build the new comment card as HTML
var newCard = "";
newCard = newCard + "<div class='card review-card'>";
newCard = newCard +   "<p>\\"" + comment + "\\"</p>";
newCard = newCard +   "<div class='reviewer-name'>" + name + "</div>";
newCard = newCard + "</div>";

// Add the new card to the bottom of the reviews grid
var grid = document.getElementById("reviewsGrid");
grid.innerHTML = grid.innerHTML + newCard;

// Show the success message
document.getElementById("commentSuccess").style.display = "block";

// Clear the form
document.getElementById("commentName").value = "";
document.getElementById("commentText").value = "";

// Scroll to show the new comment
grid.scrollIntoView({ behavior: "smooth" });`}</code></pre>
            </div>
            <p className="text-sm">
              When a user submits a comment, it appears on the page immediately without a refresh. The submitted name and comment are read from the form, built into a styled review card as an HTML string, and added to the reviews grid using innerHTML concatenation. The success message is shown, the form fields are cleared, and the page smoothly scrolls down to display the new comment.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4">
            <h3>Custom Email Validation</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <ImageWithFallback
                src={emailValidationImg}
                alt="Custom email validation screenshot"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`// Checks if an email address looks valid
// Must have @ and a dot somewhere after it
function isValidEmail(email) {

  var atSign = email.indexOf("@");
  var dot = email.lastIndexOf(".");

  // At least 1 character before @
  if (atSign < 1) return false;

  // Dot must be at least 2 chars after the @
  if (dot < atSign + 2) return false;

  // At least 1 character after the dot
  if (dot >= email.length - 1) return false;

  return true;
}`}</code></pre>
            </div>
            <p className="text-sm">
              A custom email validation function used on the rent application form. Rather than relying on a regular expression, the function checks email validity using string position logic — confirming an @ symbol exists with at least one character before it, a dot exists at least two characters after the @, and at least one character follows the dot. This approach was chosen to keep the logic readable rather than hidden inside a complex pattern.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4">
            <h3>Data-Driven Card Rendering</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <ImageWithFallback
                src={cardRenderingImg}
                alt="Data-driven card rendering screenshot"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`function loadDogCards() {
  var grid = document.getElementById("dogsGrid");
  if (grid === null) return;

  grid.innerHTML = "";

  // Loop through each dog and build a card
  for (var i = 0; i < dogs.length; i++) {
    var dog = dogs[i];

    var card = "";
    card = card + "<div class='card dog-card'>";
    card = card +   "<img src='" + dog.image_url + "' alt='" + dog.name + "'>";
    card = card +   "<div class='dog-info'>";
    card = card +     "<h3>" + dog.name + "</h3>";
    card = card +     "<p><strong>Breed:</strong> " + dog.breed + "</p>";
    card = card +     "<p><strong>Temperament:</strong> " + dog.temperament + "</p>";
    card = card +   "</div>";
    card = card + "</div>";

    grid.innerHTML = grid.innerHTML + card;
  }
}`}</code></pre>
            </div>
            <p className="text-sm">
              The rent page builds its dog cards dynamically from a JavaScript data array, rather than being hard-coded into the HTML. When the page loads, the script loops through every dog object in the array, builds a card as an HTML string using the dog's name, age, breed, temperament and image, then adds it to the grid. The same data array also populates the dog selector dropdown on the rental form, so the two stay in sync automatically.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#FF7F50]"></div>
          <h2>Interactive Features – Rust Toolkit</h2>
        </div>
        <p className="text-lg mb-8 max-w-3xl">
          The Rust Toolkit is a multi-page interactive encyclopedia for the survival game Rust. From a web development perspective it features a searchable items database, a recursive crafting tree, a raid cost calculator, and tab-based navigation. I designed the structure and used AI assistance for parts of the JavaScript implementation, treating AI as a development tool similar to Stack Overflow or documentation.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4">
            <h3>Search and Filter</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <ImageWithFallback
                src={searchFilterImg}
                alt="Search and filter screenshot"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`const [searchQuery, setSearchQuery] = useState('');
const [categoryFilter, setCategoryFilter] = useState<ItemCategory | 'all'>('all');
const [rarityFilter, setRarityFilter] = useState<ItemRarity | 'all'>('all');

const filteredItems = useMemo(() => {
  return Object.values(items).filter((item) => {
    const matchesSearch = item.name.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all'
      || item.category === categoryFilter;
    const matchesRarity = rarityFilter === 'all'
      || item.rarity === rarityFilter;

    return matchesSearch && matchesCategory && matchesRarity;
  });
}, [searchQuery, categoryFilter, rarityFilter]);`}</code></pre>
            </div>
            <p className="text-sm">
              Real-time search and filtering on the items database. Typing in the search box filters items by name as the user types. Two filter button rows — one for category (Weapon, Armor, Tool, Resource etc.) and one for rarity — combine with the search text to narrow results.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4">
            <h3>Recursive Crafting Tree</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <ImageWithFallback
                src={craftingTreeImg}
                alt="Recursive crafting tree screenshot"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`interface TreeNode {
  itemId: string;
  quantity: number;
  depth: number;
}

const buildTree = (itemId: string, quantity = 1, depth = 0): TreeNode[] => {
  const item = items[itemId];
  if (!item || !item.craftingRecipe) return [];

  const nodes: TreeNode[] = [{ itemId, quantity, depth }];

  item.craftingRecipe.ingredients.forEach((ingredient) => {
    const sub = items[ingredient.itemId];
    const needed = Math.ceil(
      (ingredient.quantity * quantity) / (item.craftingRecipe!.output || 1)
    );

    // If sub-ingredient has its own recipe, recurse
    if (sub && sub.craftingRecipe) {
      nodes.push(...buildTree(ingredient.itemId, needed, depth + 1));
    } else {
      nodes.push({ itemId: ingredient.itemId, quantity: needed, depth: depth + 1 });
    }
  });

  return nodes;
};`}</code></pre>
            </div>
            <p className="text-sm">
              Selecting an item from a dropdown displays its full ingredient breakdown, with sub-ingredients expanding all the way down to raw materials. The total resource cost is calculated and displayed at the top. Built using a recursive function that walks each ingredient's own recipe.
            </p>
          </div>

          <div className="bg-white border border-black/10 rounded-lg p-6 space-y-4">
            <h3>Tabbed Navigation</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <ImageWithFallback
                src={tabbedNavImg}
                alt="Tabbed navigation screenshot"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="bg-[#282C34] rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-white font-mono leading-relaxed"><code>{`const [activeTab, setActiveTab] = useState('home');

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'items', label: 'Items', icon: Database },
  { id: 'crafting', label: 'Crafting', icon: Network },
  { id: 'raid', label: 'Raid Calculator', icon: Target },
  { id: 'loot', label: 'Loot Tables', icon: Package },
  { id: 'monuments', label: 'Monuments', icon: Map },
  { id: 'building', label: 'Base Planner', icon: Building },
];

return (
  <Tabs.List className="flex gap-1 overflow-x-auto">
    {tabs.map((tab) => (
      <Tabs.Trigger
        key={tab.id}
        value={tab.id}
        className={activeTab === tab.id
          ? 'border-primary text-primary font-semibold'
          : 'border-transparent text-muted-foreground'
        }
      >
        <tab.icon className="w-4 h-4" />
        <span>{tab.label}</span>
      </Tabs.Trigger>
    ))}
  </Tabs.List>
);`}</code></pre>
            </div>
            <p className="text-sm">
              A consistent top navigation bar across every page of the toolkit, with the active page highlighted in the orange accent colour. Built using shared HTML/CSS components and a small piece of JavaScript that adds an active class to the current page's link.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
