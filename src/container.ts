import { Container } from 'inversify';
import TYPES from './constants/types';
import { AuthController, AuthService } from './domains/auth';
import { ProfileController, ProfileService } from './domains/profile';
import { ProductController, ProductService } from './domains/product';
import { CartController, CartService } from './domains/cart';
import { OrderController, OrderService } from './domains/order';


export class ContainerLoader {
    public static load(): Container {
        const container = new Container();
        container.bind<AuthController>(TYPES.AuthController).to(AuthController).inSingletonScope();
        container.bind<AuthService>(TYPES.AuthService).to(AuthService).inSingletonScope();

        container.bind<ProfileController>(TYPES.ProfileController).to(ProfileController).inSingletonScope();
        container.bind<ProfileService>(TYPES.ProfileService).to(ProfileService).inSingletonScope();
        
        container.bind<ProductController>(TYPES.ProductController).to(ProductController).inSingletonScope();
        container.bind<ProductService>(TYPES.ProductService).to(ProductService).inSingletonScope();

        container.bind<CartController>(TYPES.CartController).to(CartController).inSingletonScope();
        container.bind<CartService>(TYPES.CartService).to(CartService).inSingletonScope();

        container.bind<OrderController>(TYPES.OrderController).to(OrderController).inSingletonScope();
        container.bind<OrderService>(TYPES.OrderService).to(OrderService).inSingletonScope();
        
        return container;
    }
}