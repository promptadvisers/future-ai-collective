import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const ApplicationForm = ({ onClose }: { onClose: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    linkedinUrl: "",
    jobRole: "",
    jobRoleOther: "",
    companyName: "",
    companySize: "",
    industry: "",
    industryOther: "",
    aiImplementationStatus: "",
    willingToShare: "",
    motivation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("applications").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          linkedin_url: formData.linkedinUrl,
          job_role: formData.jobRole as any,
          job_role_other: formData.jobRoleOther,
          company_name: formData.companyName,
          company_size: formData.companySize as any,
          industry: formData.industry as any,
          industry_other: formData.industryOther,
          ai_implementation_status: formData.aiImplementationStatus as any,
          willing_to_share: formData.willingToShare === "yes",
          motivation: formData.motivation,
        },
      ]);

      if (error) throw error;

      toast.success("Application submitted successfully! We'll be in touch soon.");
      onClose();
    } catch (error: any) {
      toast.error("Error submitting application. Please try again.");
      console.error("Error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">Apply for Early Access</h2>
        
        {/* Basic Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">Basic Information</h3>
          
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Business Email Address</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
            <Input
              id="linkedin"
              type="url"
              required
              value={formData.linkedinUrl}
              onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
            />
          </div>
        </div>

        {/* Professional Role & Company Details */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">Professional Role & Company Details</h3>
          
          <div className="space-y-2">
            <Label htmlFor="jobRole">Current Job Title/Role</Label>
            <Select
              required
              value={formData.jobRole}
              onValueChange={(value) => setFormData({ ...formData, jobRole: value })}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg">
                <SelectItem value="CEO/Founder/Owner">CEO/Founder/Owner</SelectItem>
                <SelectItem value="C-Level Executive">C-Level Executive</SelectItem>
                <SelectItem value="VP/Director-Level">VP/Director-Level</SelectItem>
                <SelectItem value="Senior Manager">Senior Manager</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            
            {formData.jobRole === "Other" && (
              <Input
                placeholder="Please specify your role"
                required
                value={formData.jobRoleOther}
                onChange={(e) => setFormData({ ...formData, jobRoleOther: e.target.value })}
                className="mt-2"
              />
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              required
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companySize">Company Size</Label>
            <Select
              required
              value={formData.companySize}
              onValueChange={(value) => setFormData({ ...formData, companySize: value })}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select company size" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg">
                <SelectItem value="1-10 employees">1-10 employees</SelectItem>
                <SelectItem value="11-50 employees">11-50 employees</SelectItem>
                <SelectItem value="51-200 employees">51-200 employees</SelectItem>
                <SelectItem value="201-500 employees">201-500 employees</SelectItem>
                <SelectItem value="501+ employees">501+ employees</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="industry">Industry</Label>
            <Select
              required
              value={formData.industry}
              onValueChange={(value) => setFormData({ ...formData, industry: value })}
            >
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent className="bg-white border shadow-lg">
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Healthcare">Healthcare</SelectItem>
                <SelectItem value="Finance/Banking">Finance/Banking</SelectItem>
                <SelectItem value="E-commerce/Retail">E-commerce/Retail</SelectItem>
                <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                <SelectItem value="Professional Services">Professional Services</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            
            {formData.industry === "Other" && (
              <Input
                placeholder="Please specify your industry"
                required
                value={formData.industryOther}
                onChange={(e) => setFormData({ ...formData, industryOther: e.target.value })}
                className="mt-2"
              />
            )}
          </div>
        </div>

        {/* AI Implementation Status */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">AI Implementation</h3>
          
          <div className="space-y-2">
            <Label>Are you currently implementing or experimenting with AI in your business?</Label>
            <RadioGroup
              required
              value={formData.aiImplementationStatus}
              onValueChange={(value) => setFormData({ ...formData, aiImplementationStatus: value })}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Yes" id="ai-yes" />
                <Label htmlFor="ai-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No, but we plan to within the next 12 months" id="ai-plan" />
                <Label htmlFor="ai-plan">No, but we plan to within the next 12 months</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="No, but interested in getting started" id="ai-interested" />
                <Label htmlFor="ai-interested">No, but interested in getting started</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Sharing Willingness */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">Knowledge Sharing</h3>
          
          <div className="space-y-2">
            <Label>
              Are you willing to share lessons learned, case studies, or best practices with other community members?
              <span className="block text-sm text-gray-500">(NDAs will be signed for all community members)</span>
            </Label>
            <RadioGroup
              required
              value={formData.willingToShare}
              onValueChange={(value) => setFormData({ ...formData, willingToShare: value })}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="share-yes" />
                <Label htmlFor="share-yes">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="share-no" />
                <Label htmlFor="share-no">No</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Motivation */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">Your Motivation</h3>
          
          <div className="space-y-2">
            <Label htmlFor="motivation">
              Why do you want to join this community, and what do you hope to gain from participating?
            </Label>
            <Textarea
              id="motivation"
              required
              value={formData.motivation}
              onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              className="min-h-[100px]"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-end pt-6 border-t">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
};