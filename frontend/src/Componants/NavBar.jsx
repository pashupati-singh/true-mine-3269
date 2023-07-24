import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronRightIcon,
  SmallAddIcon,
} from "@chakra-ui/icons";
import { BsCart4 } from "react-icons/bs";
import { Link as DomLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navigation() {
  const { userName, isAuth } = useSelector((store) => store.authReducer);
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}>
        <Flex
          flex={{ base: 1, md: 0 }}
          ml={{ base: -2 }}
          display={{ base: "flex", lg: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start", lg: "start" }}>
          <Box>
            <img
              src="https://gardenguru.in/cdn/shop/files/logo.png?v=1623916460"
              alt="Logo"
            />
          </Box>

          <Flex display={{ base: "none", lg: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}>
          {!isAuth && (
            <>
              <DomLink to="/login">
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"#"}>
                  Sign In
                </Button>
              </DomLink>
              <DomLink to="/signup">
                <Button
                  as={"a"}
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"green.400"}
                  href={"#"}
                  _hover={{
                    bg: "green.300",
                  }}>
                  Sign Up
                </Button>
              </DomLink>
            </>
          )}
          {isAuth && (
            <>
              <Button
                as={"a"}
                display={{ base: "none", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"green.400"}
                _hover={{
                  bg: "green.300",
                }}>
                LogOut
              </Button>
              <Avatar name={userName} />
            </>
          )}
          <DomLink to={"/cart"}>
            <Button
              leftIcon={<BsCart4 />}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"lg"}
              fontWeight={600}
              colorScheme="blue"
              variant="outline">
              <sub>(1)</sub>
            </Button>
          </DomLink>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <DomLink to={`/${navItem.link}`}>
              <PopoverTrigger>
                <Link
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
            </DomLink>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                // rounded={"xl"}
                minW={"xs"}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href }) => {
  return (
    <DomLink to={`${href}`}>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("green.100", "green.900") }}>
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .1s ease"}
              _groupHover={{ color: "green.400" }}
              fontWeight={500}>
              {label}
            </Text>
          </Box>
          <Flex
            transition={"all .5s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}>
            <Icon color={"black.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </DomLink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ lg: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, link, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}>
        <DomLink to={`/${link}`}>
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}>
            {label}
          </Text>
        </DomLink>
        {children && (
          <Icon
            as={SmallAddIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    link: " ",
  },
  {
    label: "Seeds",
    link: "products?category=seeds",
    children: [
      {
        label: "Vegetable Seeds",
        href: "/products?category=seeds&type=vegetable_seeds",
      },
      {
        label: "Herbs Seeds",
        href: "/products?category=seeds&type=herb_seeds",
      },
      {
        label: "Microgreen Seeds",
        href: "/products?category=seeds&type=microgreens_seeds",
      },
      {
        label: "Fruits Seeds",
        href: "/products?category=seeds&type=fruit_seeds",
      },
      {
        label: "Flower Seeds",
        href: "/products?category=seeds&type=flower_seeds",
      },
    ],
  },
  {
    label: "Hydroponics",
    link: "products?category=hydroponics",
    children: [
      {
        label: "Hydroponic Growing Media",
        href: "/products?category=hydroponics&type=growing_media_hydroponics",
      },
      {
        label: "Hydroponic Nutrients",
        href: "/products?category=hydroponics&type=nutrient_hydroponics",
      },
      {
        label: "Hydroponic DIY Kits",
        href: "/products?category=hydroponics&type=diy_kits_hydroponics",
      },
      {
        label: "Hydroponic Instruments",
        href: "/products?category=hydroponics&type=instrument_hydroponics",
      },
      {
        label: "Hydroponic Accessories",
        href: "/products?category=hydroponics&type=accessorie_hydroponics",
      },
    ],
  },
  {
    label: "Organic Farming",
    link: "products?category=organic_farming",
    children: [
      {
        label: "Organic Pesticide",
        href: "/products?category=organic_farming&type=organic_fertilizers",
      },
      {
        label: "Organic Fertilizer",
        href: "/products?category=organic_farming&type=organic_fertilizers",
      },
      {
        label: "Bio Pesticide",
        href: "/products?category=organic_farming&type=bio_pesticides",
      },
      {
        label: "Bio Fertilizer",
        href: "/products?category=organic_farming&type=bio_fertilizers",
      },
    ],
  },
  {
    label: "Gardening Inputs",
    link: "products?category=gardening_inputs",
    children: [
      {
        label: "Potting Medium",
        href: "/products?category=gardening_inputs&type=potting_medium",
      },
      {
        label: "Pots",
        href: "/products?category=gardening_inputs&type=pots",
      },
      {
        label: "Grow Bags",
        href: "/products?category=gardening_inputs&type=grow_bags",
      },
      {
        label: "Grow Beds",
        href: "/products?category=gardening_inputs&type=grow_beds",
      },
      {
        label: "Fertilizer",
        href: "/products?category=gardening_inputs&type=fertilizers",
      },
    ],
  },
  {
    label: "IPM",
    link: "products",
  },
  {
    label: "Training",
    link: "products",
  },
];
