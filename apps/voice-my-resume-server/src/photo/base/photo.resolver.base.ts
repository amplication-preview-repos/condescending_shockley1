/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Photo } from "./Photo";
import { PhotoCountArgs } from "./PhotoCountArgs";
import { PhotoFindManyArgs } from "./PhotoFindManyArgs";
import { PhotoFindUniqueArgs } from "./PhotoFindUniqueArgs";
import { DeletePhotoArgs } from "./DeletePhotoArgs";
import { PhotoService } from "../photo.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Photo)
export class PhotoResolverBase {
  constructor(
    protected readonly service: PhotoService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Photo",
    action: "read",
    possession: "any",
  })
  async _photosMeta(
    @graphql.Args() args: PhotoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Photo])
  @nestAccessControl.UseRoles({
    resource: "Photo",
    action: "read",
    possession: "any",
  })
  async photos(@graphql.Args() args: PhotoFindManyArgs): Promise<Photo[]> {
    return this.service.photos(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Photo, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Photo",
    action: "read",
    possession: "own",
  })
  async photo(
    @graphql.Args() args: PhotoFindUniqueArgs
  ): Promise<Photo | null> {
    const result = await this.service.photo(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Photo)
  @nestAccessControl.UseRoles({
    resource: "Photo",
    action: "delete",
    possession: "any",
  })
  async deletePhoto(
    @graphql.Args() args: DeletePhotoArgs
  ): Promise<Photo | null> {
    try {
      return await this.service.deletePhoto(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
