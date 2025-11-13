import react from "react";

// difining props (data)
interface Props {
    title: string;
    description: string;
    icon: React.ReactNode; 
}

const CapabilityCard = ({ title, description, icon }: Props) => {
    return (
        <div className="border border-gray-700/50 bg-gray-900/30 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-orange/50 hover:-transition-y-1">
            <div className="md-4 text-brand-orange">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
};

export default CapabilityCard;