import { createLazyFileRoute } from "@tanstack/react-router";
import DesignerProfile from "@/views/designerProfile/DesignerProfile";

export const Route = createLazyFileRoute("/designer-profile")({
  component: DesignerProfile,
});
