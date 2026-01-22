import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

// ----------------------------------------------------------------------
// GOOGLE FORM CONFIGURATION
// ----------------------------------------------------------------------
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSehdsheqD0EVBW7Re57qwkhO2tMOBmVytN-qmeUDcWHpgMjZw/formResponse";

const FIELD_MAPPING = {
    fullName: "entry.1278469177",
    email: "entry.1068345279",
    companyName: "entry.239677022",
    role: "entry.567812601",
    businessType: "entry.1218074808",
    revenue: "entry.1733326712",
    mainProblem: "entry.1827237059",
    importance: "entry.1395102486",
    actionTimeline: "entry.446075556",
    additionalInfo: "entry.975714833"
};
// ----------------------------------------------------------------------

const ContactForm = ({ onSuccess }) => {
    // ... state ...
    const INITIAL_STATE = {
        fullName: '',
        email: '',
        companyName: '',
        role: '',
        businessType: '',
        revenue: '',
        mainProblem: '',
        importance: '',
        actionTimeline: '',
        additionalInfo: ''
    };

    const [formData, setFormData] = useState(INITIAL_STATE);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // FIX: We need to pass the specific state key because the native 'name' attribute
    // is set to the Google Form 'entry.xxxxx' ID, which doesn't match our state keys.
    const handleChange = (key) => (e) => {
        setFormData(prev => ({ ...prev, [key]: e.target.value }));
    };

    const handleNativeSubmit = (e) => {
        setIsSubmitting(true);
        // We let the form submit naturally to the iframe
        // We just start a timer to show 'success' because we can't read the iframe result (CORS)
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData(INITIAL_STATE); // Reset form
            console.log("Form submitted via native POST");
            if (onSuccess) onSuccess();
        }, 2000);
    };

    const inputClasses = "w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#37ABD6] focus:ring-1 focus:ring-[#37ABD6] transition-all text-sm";
    const labelClasses = "block text-white text-sm font-medium mb-2";

    return (
        <div className="w-full max-w-[800px] mx-auto text-left animate-fadeIn">
            {/* Hidden Iframe to capture the submission without page reload */}
            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: 'none' }}
            />

            <div className="mb-8 border-b border-white/10 pb-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                    This isn't a sales form. I use this to understand your business, your challenges, and whether I can genuinely help. <br className="hidden md:block" />
                    If it makes sense, we'll have a conversation. If not, I'll tell you that too.
                </p>
            </div>

            <form
                action={GOOGLE_FORM_ACTION_URL}
                method="POST"
                target="hidden_iframe"
                onSubmit={handleNativeSubmit}
                className="space-y-6"
            >
                {/* Full Name */}
                <div>
                    <label className={labelClasses}>Your full name *</label>
                    <input
                        type="text"
                        name={FIELD_MAPPING.fullName}
                        value={formData.fullName}
                        onChange={handleChange('fullName')}
                        placeholder="e.g. Sandeep Sinha"
                        className={inputClasses}
                        required
                    />
                </div>

                {/* Work Email */}
                <div>
                    <label className={labelClasses}>
                        Work email (no Gmail/Yahoo, please)
                        <span className="block text-gray-400 text-xs font-normal mt-1">Helps me understand the company context better. *</span>
                    </label>
                    <input
                        type="email"
                        name={FIELD_MAPPING.email}
                        value={formData.email}
                        onChange={handleChange('email')}
                        placeholder="name@company.com"
                        className={inputClasses}
                        required
                    />
                </div>

                {/* Company Name */}
                <div>
                    <label className={labelClasses}>Company Name *</label>
                    <input
                        type="text"
                        name={FIELD_MAPPING.companyName}
                        value={formData.companyName}
                        onChange={handleChange('companyName')}
                        placeholder="Your Company Name"
                        className={inputClasses}
                        required
                    />
                </div>

                {/* Role */}
                {/* Role */}
                <div>
                    <label className={labelClasses}>Your Role in Company *</label>
                    <div className="relative">
                        <select
                            name={FIELD_MAPPING.role}
                            value={formData.role}
                            onChange={handleChange('role')}
                            className={`${inputClasses} appearance-none cursor-pointer`}
                            required
                        >
                            <option value="" disabled className="text-gray-500">Select your role</option>
                            <option value="Founder / CEO">Founder / CEO</option>
                            <option value="Co-Founder">Co-Founder</option>
                            <option value="VP / Director">VP / Director</option>
                            <option value="Manager">Manager</option>
                            <option value="Other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                </div>

                {/* Business Type */}
                <div>
                    <label className={labelClasses}>What kind of business are you building? *</label>
                    <div className="relative">
                        <select
                            name={FIELD_MAPPING.businessType}
                            value={formData.businessType}
                            onChange={handleChange('businessType')}
                            className={`${inputClasses} appearance-none cursor-pointer`}
                            required
                        >
                            <option value="" disabled>Select business type</option>
                            <option value="B2B SaaS">B2B SaaS</option>
                            <option value="B2B Services">B2B Services</option>
                            <option value="B2C">B2C</option>
                            <option value="Marketplace">Marketplace</option>
                            <option value="Agency">Agency</option>
                            <option value="Other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                </div>

                {/* Revenue */}
                <div>
                    <label className={labelClasses}>Roughly where are you today in terms of revenue? *</label>
                    <div className="relative">
                        <select
                            name={FIELD_MAPPING.revenue}
                            value={formData.revenue}
                            onChange={handleChange('revenue')}
                            className={`${inputClasses} appearance-none cursor-pointer`}
                            required
                        >
                            <option value="" disabled>Select revenue range</option>
                            <option value="Pre-revenue">Pre-revenue</option>
                            <option value="$0 – $10k / month">$0 – $10k / month</option>
                            <option value="$10k – $50k / month">$10k – $50k / month</option>
                            <option value="$50k – $100k / month">$50k – $100k / month</option>
                            <option value="$100k+ / month">$100k+ / month</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                </div>

                {/* Main Problem */}
                <div>
                    <label className={labelClasses}>What's the main problem you want help with? *</label>
                    <textarea
                        name={FIELD_MAPPING.mainProblem}
                        value={formData.mainProblem}
                        onChange={handleChange('mainProblem')}
                        placeholder="e.g. inconsistent sales, founder-led selling, long sales cycles, unclear ICP..."
                        className={`${inputClasses} min-h-[100px] resize-y`}
                        required
                    />
                </div>

                {/* Importance */}
                <div>
                    <label className={labelClasses}>Why is this important now? *</label>
                    <textarea
                        name={FIELD_MAPPING.importance}
                        value={formData.importance}
                        onChange={handleChange('importance')}
                        placeholder="What happens if nothing changes in the next 3–6 months?"
                        className={`${inputClasses} min-h-[100px] resize-y`}
                        required
                    />
                </div>

                {/* Timeline */}
                <div>
                    <label className={labelClasses}>When are you realistically looking to take action? *</label>
                    <div className="relative">
                        <select
                            name={FIELD_MAPPING.actionTimeline}
                            value={formData.actionTimeline}
                            onChange={handleChange('actionTimeline')}
                            className={`${inputClasses} appearance-none cursor-pointer`}
                            required
                        >
                            <option value="" disabled>Select timeline</option>
                            <option value="Immediately">Immediately</option>
                            <option value="In the next 30 days">In the next 30 days</option>
                            <option value="In 1–3 months">In 1–3 months</option>
                            <option value="Just exploring">Just exploring</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                    </div>
                </div>

                {/* Additional Info */}
                <div>
                    <label className={labelClasses}>Anything else you'd like me to know? (optional)</label>
                    <textarea
                        name={FIELD_MAPPING.additionalInfo}
                        value={formData.additionalInfo}
                        onChange={handleChange('additionalInfo')}
                        className={`${inputClasses} min-h-[100px] resize-y`}
                    />
                </div>

                <div className="pt-4 border-t border-white/10">
                    <p className="text-gray-500 text-xs mb-8">
                        I work best with founders and leaders who already have customers and are serious about improving how they sell and grow. <br className="hidden md:block" />
                        If you're looking only for leads, ads, or short-term hacks, I may not be the right fit.
                    </p>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-black font-bold py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Request A Fit Conversation'}
                        {!isSubmitting && <ArrowRight size={18} />}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
