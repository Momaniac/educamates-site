import { redirect } from "next/navigation";

/**
 * /nosotros is a landing that consolidates under its sub-routes.
 * Redirect to the primary "Quiénes somos" page.
 */
export default function NosotrosPage() {
  redirect("/nosotros/quienes-somos");
}
