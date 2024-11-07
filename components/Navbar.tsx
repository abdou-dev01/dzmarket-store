import Link from "next/link";
import Container from "./Container";
import MainNav from "./MainNav";
import getCategories from "@/actions/getCategories";
import NavbarAction from "./NavbarAction";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
          <Link href="/" className="ms-4 flex lg:ms-0 gap-x-2">
            <p className="font-bold text-lg uppercase"> Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarAction />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
