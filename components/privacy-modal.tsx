"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface PrivacyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function PrivacyModal({ open, onOpenChange }: PrivacyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-gray-900">Privacy Policy – Tru Glow</DialogTitle>
        </DialogHeader>
        
        <div className="prose prose-lg max-w-none mt-4">
          <p className="text-gray-600 mb-6">
            Tru Glow is committed to protecting your online privacy. We are entirely open about our information-gathering practices. Please take the time to review this notice, which states our privacy policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What information does Tru Glow collect?</h2>
          <p className="text-gray-700 mb-4">
            Tru Glow will only collect personally identifying information, which will be done only with your knowledge and consent. Optional information like age, gender, etc., may also be requested.
          </p>
          <p className="text-gray-700 mb-6">
            We might add your email address to our mailing list only. You will not be put on the mailing lists of any third parties, and your email address, name, city, phone number or country will not be divulged to anyone else. We will use these details to keep you posted about services, offers, discounts, celebration wishes, news, and events. Removing yourself from the mailing list can be done quickly – click on the "Unsubscribe" link at the bottom of our emails.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How would your information be used?</h2>
          <p className="text-gray-700 mb-4">
            Tru Glow would use the information to provide you with information about services, new developments, offers, discounts, celebration wishes, news, and events. Tru Glow does not sell its users' email addresses or other information.
          </p>
          <p className="text-gray-700 mb-6">
            We yearn to safeguard your privacy and will strive to ensure all the information provided is used in accordance with the guidelines and regulations stated. We would not share or disclose details through direct or indirect sources. Your visit to our website is secure, and your right to privacy is safeguarded and protected.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Editorial Integrity And Policy</h2>
          <p className="text-gray-700 mb-6">
            We aim to bring the most reliable and trusted information about dermatology, aesthetics, and cosmetic surgery. All our information is written and reviewed by specialists from the industry; however, we emphasise seeking an expert's opinion before attempting any mentioned details. Choose information wisely and do not delay professional medical advice because of what you have read from our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third Parties</h2>
          <p className="text-gray-700 mb-6">
            We do not deal in selling any personal or customer information. We will never disclose your details to a third party except when required by law. We may use some data in a general sense without any reference to your name to create marketing statistics, identify user demands, and generally assist in meeting customer needs. In addition, we may use the information that you provide to improve our website and services but not for any other purposes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What are cookies & how do we use them?</h2>
          <p className="text-gray-700 mb-6">
            A cookie is a small file placed in your web browser that collects information about your web browsing behaviour. Tracking cookies allows us to target your needs and preferences. Our website uses cookies to analyse website traffic and help us provide you with a better experience. Cookies do not access information stored on your computer or any personal information (e.g. name, address, email address or telephone number). Tru Glow automatically accepts cookies, but you can choose to reject cookies by changing your browser settings. This may, however, prevent you from taking full advantage of our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Security</h2>
          <p className="text-gray-700 mb-6">
            We strive to ensure the security, integrity, and privacy of personal information submitted to our website and periodically update our security measures in light of current technologies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Change in Privacy Policy</h2>
          <p className="text-gray-700 mb-6">
            As we plan to ensure our privacy policy remains current, this policy is subject to change. We may modify this policy at any time, at our sole discretion, and all modifications will be effective immediately upon posting the changes on this website. Please return periodically to review our privacy policy. All information provided by our website is governed and interpreted according to India's laws. This privacy policy applies to all websites, mobile applications owned and operated by Tru Glow.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Tru Glow</strong></p>
              <p>Tru Glow, Alkapur Township, Manikonda, Hyderabad, Telangana 500075</p>
              <p><strong>Email:</strong> <a href="mailto:truglowcs@gmail.com" className="text-amber-600 hover:text-amber-700">truglowcs@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+917799127273" className="text-amber-600 hover:text-amber-700">+91 7799127273</a>, <a href="tel:+917036127273" className="text-amber-600 hover:text-amber-700">+91 7036127273</a></p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

