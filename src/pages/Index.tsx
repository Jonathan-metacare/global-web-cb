import { ArrowRight, Globe, Heart, Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-lab.jpg";
import bioImmuneImage from "@/assets/bio-immune.jpg";
import stemCellsImage from "@/assets/stem-cells.jpg";
import elderlyCareImage from "@/assets/elderly-care.jpg";
import modernCommerceImage from "@/assets/modern-commerce.jpg";

const Index = () => {
  const advantages = [
    {
      icon: Globe,
      title: "全球化业务布局",
      description: "覆盖全球主要市场，为客户提供国际化的专业服务",
    },
    {
      icon: Sparkles,
      title: "干细胞存储数量全球第一",
      description: "拥有世界领先的干细胞存储技术和最大的存储量",
    },
    {
      icon: Heart,
      title: "全球养老服务领军企业",
      description: "提供全方位、高品质的养老健康服务解决方案",
    },
  ];

  const businessSegments = [
    {
      title: "生