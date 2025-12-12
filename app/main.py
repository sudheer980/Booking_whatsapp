from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import get_settings
from app.api.auth.routes_auth import router as auth_router
from app.api.admin.routes_dashboard import router as admin_dashboard_router
from app.api.admin.routes_dashboard_analytics import router as admin_analytics_router
from app.api.admin.routes_categories import router as admin_categories_router
from app.api.admin.routes_vendors import router as admin_vendors_router
from app.api.admin.routes_shops import router as admin_shops_router
from app.api.admin.routes_products import router as admin_products_router
from app.api.admin.routes_orders import router as admin_orders_router
from app.api.admin.routes_payouts import router as admin_payouts_router
from app.api.admin.routes_notifications import router as admin_notifications_router
from app.api.admin.routes_support import router as admin_support_router
from app.api.admin.routes_app_settings import router as admin_settings_router
from app.api.vendor.routes_dashboard import router as vendor_dashboard_router
from app.api.vendor.routes_shop_profile import router as vendor_shop_router
from app.api.vendor.routes_products import router as vendor_products_router
from app.api.vendor.routes_orders import router as vendor_orders_router
from app.api.vendor.routes_payouts import router as vendor_payouts_router
from app.api.vendor.routes_notifications import router as vendor_notifications_router
from app.api.vendor.routes_support import router as vendor_support_router
from app.api.whatsapp.routes_whatsapp import router as whatsapp_router

settings = get_settings()
app = FastAPI(title=settings.app_name, debug=settings.debug)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(admin_dashboard_router)
app.include_router(admin_analytics_router)
app.include_router(admin_categories_router)
app.include_router(admin_vendors_router)
app.include_router(admin_shops_router)
app.include_router(admin_products_router)
app.include_router(admin_orders_router)
app.include_router(admin_payouts_router)
app.include_router(admin_notifications_router)
app.include_router(admin_support_router)
app.include_router(admin_settings_router)
app.include_router(vendor_dashboard_router)
app.include_router(vendor_shop_router)
app.include_router(vendor_products_router)
app.include_router(vendor_orders_router)
app.include_router(vendor_payouts_router)
app.include_router(vendor_notifications_router)
app.include_router(vendor_support_router)
app.include_router(whatsapp_router)


@app.get("/health")
async def health():
    return {"status": "ok"}
